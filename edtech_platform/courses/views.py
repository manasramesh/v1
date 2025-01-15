# courses/views.py
from django.shortcuts import render

def course_list(request):
    """ Display a list of courses. """
    return render(request, 'courses/course_list.html')

def course_detail(request, course_id):
    """ Display details for a single course. """
    # For now, just render a placeholder template
    return render(request, 'courses/course_detail.html', {'course_id': course_id})
