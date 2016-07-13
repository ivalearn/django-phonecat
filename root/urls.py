from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import RedirectView
from django.conf import settings
from django.utils.six.moves.urllib.parse import urljoin
from django.http import HttpResponseRedirect


def media_redirect(request, path):
    return HttpResponseRedirect(urljoin(settings.STATIC_URL, path))


urlpatterns = [
    url(r'^$', RedirectView.as_view(url=urljoin(settings.STATIC_URL, 'index.html'))),
    url(r'^media/(?P<path>.*)$', media_redirect),
    url(r'^admin/', admin.site.urls),
    url(r'^phonecat/', include('phonecat.urls')),
]
