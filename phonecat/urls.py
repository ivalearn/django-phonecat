from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.api_root),
    url(r'^phones/$', views.PhoneList.as_view(), name='phone-list'),
    url(r'^phones/(?P<pk>[0-9]+)$', views.PhoneDetail.as_view(), name='phone-detail'),
]
