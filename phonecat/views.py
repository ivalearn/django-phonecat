from rest_framework import generics
from .models import Phone
from .serializers import PhoneShortSerializer, PhoneFullSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'phones': reverse('phone-list', request=request, format=format)
    })


class PhoneList(generics.ListAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneShortSerializer


class PhoneDetail(generics.RetrieveAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneFullSerializer
