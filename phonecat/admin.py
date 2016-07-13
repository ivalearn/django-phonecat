from django.contrib import admin
from django import forms
from . import models


class PhoneAdminForm(forms.ModelForm):
    class Meta:
        model = models.Phone
        exclude = ()
        widgets = {
            'snippet': forms.Textarea
        }


@admin.register(models.Phone)
class PhoneAdmin(admin.ModelAdmin):
    form = PhoneAdminForm
