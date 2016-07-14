from django.template.response import TemplateResponse


def index_view(request):
    return TemplateResponse(request, 'phonecat/index.jade')


def angular_template_view(request, basepath):
    return TemplateResponse(request, 'phonecat/%s.jade' % basepath)
