from django.db import models


class Phone(models.Model):
    name = models.CharField(max_length=80)
    age = models.IntegerField()
    image = models.ImageField(upload_to='phones')
    snippet = models.CharField(max_length=255)

    def __unicode__(self):
        return u'Phone[%d] %s' % (self.id, self.name)
