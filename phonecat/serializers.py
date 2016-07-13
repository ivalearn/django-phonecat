from rest_framework import serializers
from .models import Phone


class PhoneShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Phone
        fields = ('id', 'name', 'age', 'imageUrl', 'snippet', 'url')


class PhoneFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
