from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from django.template.response import TemplateResponse
from .api import api_root, PhoneList, PhoneDetail


urlpatterns = format_suffix_patterns([
    url(r'^$',
        lambda request: TemplateResponse(request, 'phonecat/index.jade'),
        name='phonecat-home'),
    url(r'^(?P<basepath>.*\.template)\.html$',
        lambda request, basepath: TemplateResponse(request, 'phonecat/%s.jade' % basepath)),
    url(r'^api/$',
        api_root,
        name='phone-api'),
    url(r'^phones/$',
        PhoneList.as_view(),
        name='phone-list'),
    url(r'^phones/(?P<pk>[0-9]+)$',
        PhoneDetail.as_view(),
        name='phone-detail'),
])
