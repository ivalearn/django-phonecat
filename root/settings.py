import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '_(0r##3w!$a9)j#xdg*l^-v&o2kk#=*@rqbvwl^u$x%_!8wvp*'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['uxen1.int.vanko.me']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'compressor',
    'phonecat',
]

if DEBUG:
    # Debug Toolbar
    INTERNAL_IPS = os.environ.get('INTERNAL_IPS', '192.168.55.1').split(',')
    INSTALLED_APPS += ['debug_toolbar']

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

if DEBUG:
    # LiveReload
    INSTALLED_APPS = ['livereload'] + INSTALLED_APPS
    # MIDDLEWARE_CLASSES += ['livereload.middleware.LiveReloadScript']

ROOT_URLCONF = 'root.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            'loaders': [
                ('pyjade.ext.django.Loader', (
                    'django.template.loaders.filesystem.Loader',
                    'django.template.loaders.app_directories.Loader',
                ))
            ],
            'builtins': [
                'pyjade.ext.django.templatetags'
            ],
        },
    },
]

WSGI_APPLICATION = 'root.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases
TEMP_DIR = os.path.join(BASE_DIR, 'temp')
if not os.path.exists(TEMP_DIR):
    os.makedirs(TEMP_DIR)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(TEMP_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

COMPRESS_ROOT = os.path.join(TEMP_DIR, 'compress')
if not os.path.exists(COMPRESS_ROOT):
    os.makedirs(COMPRESS_ROOT)
COMPRESS_OUTPUT_DIR = 'cache'

_NODEJS_BINDIR = os.path.join(BASE_DIR, 'node_modules', '.bin')
_SASS_CMD = '%s/node-sass --output-style expanded {infile} > {outfile}' % _NODEJS_BINDIR
# _SASS_CMD = 'sass --scss {infile} {outfile}'

COMPRESS_PRECOMPILERS = [
    ('text/x-scss', _SASS_CMD),
    ('text/x-es6', '%s/babel {infile} -o {outfile}' % _NODEJS_BINDIR),
]

COMPRESS_CSS_FILTERS = [
    'compressor.filters.css_default.CssAbsoluteFilter',
    'compressor.filters.cssmin.rCSSMinFilter',
]

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'dist')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
]

STATICFILES_DIRS = [
    MEDIA_ROOT,
    os.path.join(BASE_DIR, 'bower_components'),
    COMPRESS_ROOT,
]
