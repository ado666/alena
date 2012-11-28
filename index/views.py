# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader

def index(request):

    template = loader.get_template('index.html')
    context = Context({
        'data': 'asd',
    })
    return HttpResponse(template.render(context))

def info(request):
    template = loader.get_template('info.html')
    context = Context({})
    return HttpResponse(template.render(context))
