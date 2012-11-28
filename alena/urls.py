from django.conf.urls import patterns, include, url
#from django.index.views import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'index', 'index.views.index'),
    url(r'info', 'index.views.info')
    # Examples:
    # url(r'^$', 'alena.views.home', name='home'),
    # url(r'^alena/', include('alena.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
