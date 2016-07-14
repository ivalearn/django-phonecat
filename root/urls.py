from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import RedirectView
from django.conf import settings
from django.utils.six.moves.urllib.parse import urljoin
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse_lazy


urlpatterns = [
    url(r'^phonecat/', include('phonecat.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^$', RedirectView.as_view(url=reverse_lazy('phonecat-home'))),
    url(r'^media/(?P<path>.*)$',
        lambda request, path: HttpResponseRedirect(urljoin(settings.STATIC_URL, path))),
]
