from rest_framework import generics, serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import Phone


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'phones': reverse('phone-list', request=request, format=format)
    })


class PhoneShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Phone
        fields = ('id', 'name', 'age', 'image1', 'snippet', 'url')


class PhoneFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone


class PhoneList(generics.ListAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneShortSerializer


class PhoneDetail(generics.RetrieveAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneFullSerializer
