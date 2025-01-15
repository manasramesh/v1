from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.contrib.auth import get_user_model
from django.db import IntegrityError
import uuid

class CustomAccountAdapter(DefaultAccountAdapter):
    def get_login_redirect_url(self, request):
        return '/dashboard'

class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    def populate_user(self, request, sociallogin, data):
        """
        Populates user information from social provider's data
        """
        user = super().populate_user(request, sociallogin, data)
        
        # Get data from Google
        first_name = data.get('first_name', '')
        last_name = data.get('last_name', '')
        email = data.get('email', '')
        
        # Set user fields
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        
        # Generate a unique username based on email
        base_username = email.split('@')[0]
        username = base_username
        
        # Keep trying until we get a unique username
        counter = 1
        while True:
            try:
                User = get_user_model()
                if not User.objects.filter(username=username).exists():
                    user.username = username
                    break
                username = f"{base_username}_{counter}"
                counter += 1
            except IntegrityError:
                counter += 1
                continue
            
        return user

    def save_user(self, request, sociallogin, form=None):
        """
        Custom user saving to handle user data from social account
        """
        user = super().save_user(request, sociallogin, form)
        return user

    def pre_social_login(self, request, sociallogin):
        """
        Invoked just after a user successfully authenticates via a social provider,
        but before the login is actually processed
        """
        # Get email from social account
        email = sociallogin.account.extra_data.get('email')
        User = get_user_model()
        
        if email:
            try:
                # Check if user already exists
                user = User.objects.get(email=email)
                if not sociallogin.is_existing:
                    # Connect the social account to the existing user
                    sociallogin.connect(request, user)
            except User.DoesNotExist:
                pass