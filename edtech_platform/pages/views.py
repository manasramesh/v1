from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
import json


def home(request):
    """
    Renders the static home page for the EdTech platform.
    """
    return render(request, 'pages/home.html')

def signup(request):
    """
    Handles signup page rendering.
    Now only includes Google OAuth option.
    """
    if request.user.is_authenticated:
        return redirect('dashboard')
    return render(request, 'pages/signup.html')

@login_required
def dashboard(request):
    # Get user data
    user = request.user
    user_data = {
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'date_joined': user.date_joined.strftime('%Y-%m-%d'),
        'last_login': user.last_login.strftime('%Y-%m-%d %H:%M:%S') if user.last_login else None,
    }
    
    return render(request, 'pages/dashboard.html', {
        'user_data_json': json.dumps(user_data)
    })