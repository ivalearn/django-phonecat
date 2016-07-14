from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .api import api_root, PhoneList, PhoneDetail
from .views import index_view, angular_template_view


urlpatterns = format_suffix_patterns([
    url(r'^$', index_view),
    url(r'^(?P<basepath>.*\.template)\.html$', angular_template_view),
    url(r'^api/$', api_root, name='phone-api'),
    url(r'^phones/$', PhoneList.as_view(), name='phone-list'),
    url(r'^phones/(?P<pk>[0-9]+)$', PhoneDetail.as_view(), name='phone-detail'),
])
