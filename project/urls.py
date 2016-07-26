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

if settings.DEBUG:
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    urlpatterns += staticfiles_urlpatterns()
else:
    from django.views.static import serve
    pattern = r'^%s(?P<path>.*)$' % settings.STATIC_URL.lstrip('/')
    urlpatterns += [url(pattern, serve, {'document_root': settings.STATIC_ROOT})]
