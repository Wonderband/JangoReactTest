from django.shortcuts import render
from django.http import HttpResponse


def main_page(request):
    return HttpResponse('<h1>Грац</h1>')
    # return render()


def about(request):
    pass


def posts(request):
    return render()


def single_post(request, post_id):
    pass


