from django.shortcuts import render, redirect
# Create your views here.
def render_home(request):
    template_name="index.html"
    return render(request, template_name)