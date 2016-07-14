from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'^phones/$', views.PhoneList.as_view(), name='phone-list'),
    url(r'^phones/(?P<pk>[0-9]+)$', views.PhoneDetail.as_view(), name='phone-detail'),
])
