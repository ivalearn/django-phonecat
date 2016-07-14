from django.db import models
from jsonfield import JSONField


class Phone(models.Model):
    name = models.CharField(max_length=80)
    age = models.IntegerField()
    image1 = models.ImageField(upload_to='phones', null=True, blank=True)
    image2 = models.ImageField(upload_to='phones', null=True, blank=True)
    image3 = models.ImageField(upload_to='phones', null=True, blank=True)
    image4 = models.ImageField(upload_to='phones', null=True, blank=True)
    image5 = models.ImageField(upload_to='phones', null=True, blank=True)
    snippet = models.CharField(max_length=255)
    props = JSONField(blank=True, null=True)

    def image(self):
        return self.image1.url

    def images(self):
        images = [getattr(self, 'image%d' % i) for i in range(1, 6)]
        images = [img.url for img in images if img and img.url]
        return images

    def json_props(self):
        return self.props

    def __unicode__(self):
        return u'Phone[%s] %s' % (self.id, self.name)

    class Meta:
        ordering = ['id']
