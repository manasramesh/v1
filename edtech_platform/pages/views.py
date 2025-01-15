from django.shortcuts import render

# Create your views here.
def home(request):
    """
    Renders the static home page for the EdTech platform.
    This page serves as the first landing page for all visitors.
    """
    return render(request, 'pages/home.html')
