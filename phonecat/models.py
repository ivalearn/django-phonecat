from django.db import models
from jsonfield import JSONField


class Phone(models.Model):
    name = models.CharField(max_length=80)
    age = models.IntegerField()
    image = models.ImageField(upload_to='phones')
    snippet = models.CharField(max_length=255)
    props = JSONField(blank=True, null=True)

    def __unicode__(self):
        return u'Phone[%d] %s' % (self.id, self.name)
