# students/views.py
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

def register_user(request):
    """
    Basic registration view.
    """
    if request.method == 'POST':
        # Handle form submission (e.g. username, email, password)
        # Create the user and redirect somewhere
        pass
    else:
        # If GET, just show a form or registration page template
        pass
    
    return render(request, 'students/register.html')

def login_user(request):
    """
    Basic login view.
    """
    if request.method == 'POST':
        # Retrieve username & password from the request
        # Attempt to authenticate and call login(...)
        pass
    else:
        # If GET, just show a login page template
        pass
    
    return render(request, 'students/login.html')

def logout_user(request):
    """
    Logs out the user and redirects them somewhere.
    """
    logout(request)
    messages.info(request, 'You have been logged out.')
    return redirect('login')  # or wherever you want to send them
