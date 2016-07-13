from rest_framework import serializers
from .models import Phone


class PhoneShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Phone
        fields = ('id', 'name', 'age', 'image', 'snippet', 'url')


class PhoneFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
