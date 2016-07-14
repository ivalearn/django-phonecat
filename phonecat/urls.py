from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .api import api_root, PhoneList, PhoneDetail


urlpatterns = format_suffix_patterns([
    url(r'^$', api_root),
    url(r'^phones/$', PhoneList.as_view(), name='phone-list'),
    url(r'^phones/(?P<pk>[0-9]+)$', PhoneDetail.as_view(), name='phone-detail'),
])
