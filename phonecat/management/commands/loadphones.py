from django.core.management.base import BaseCommand
from django.conf import settings
from phonecat.models import Phone
import json
import os
import shutil


class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('phonecat_dir_or_github', nargs=1)

    def handle(self, *args, **options):
        phonecat_dir = options['phonecat_dir_or_github'][0]
        if phonecat_dir == 'github':
            phonecat_dir = os.path.join(settings.TEMP_DIR, 'angular-phonecat-git')
            phonecat_url = 'https://github.com/angular/angular-phonecat.git'
            os.system('git clone --depth=16 -b step-14 %s %s' % (phonecat_url, phonecat_dir))
        with open(os.path.join(phonecat_dir, 'app', 'phones', 'phones.json')) as f:
            all_data = json.load(f)
        phones = []
        for pk, phone in enumerate(all_data, start=1):
            with open(os.path.join(phonecat_dir, 'app', 'phones', phone['id'] + '.json')) as f:
                props = json.load(f)
                props.pop('id')
                kwargs = dict(name=props.pop('name'), age=phone['age'], snippet=phone['snippet'])
                MAX_IMAGES = 5
                for idx, filepath in enumerate(props.pop('images', [])[:MAX_IMAGES], start=1):
                    src_path = os.path.join(phonecat_dir, 'app', filepath)
                    filename = os.path.basename(filepath)
                    subdir = Phone._meta.get_field('image%d' % idx).upload_to
                    kwargs['image%d' % idx] = os.path.join(subdir, filename)
                    dest_dir = os.path.join(settings.MEDIA_ROOT, subdir)
                    if not os.path.exists(dest_dir):
                        os.makedirs(dest_dir)
                    shutil.copy(src_path, dest_dir)
                phones.append(Phone(id=pk, props=props, **kwargs))
        Phone.objects.all().delete()
        for phone in phones:
            phone.save()
        self.stdout.write(self.style.SUCCESS('Imported %s phones' % len(phones)))
