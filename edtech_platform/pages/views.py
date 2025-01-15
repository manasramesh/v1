from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def home(request):
    """
    Renders the static home page for the EdTech platform.
    This page serves as the first landing page for all visitors.
    """
    return render(request, 'pages/home.html')
def signup(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    return render(request, 'pages/signup.html')

@login_required
def dashboard(request):
    return render(request, 'pages/dashboard.html')