from django.contrib import admin
from .models import Publicacao
from .models import Usuario

admin.site.register(Publicacao)
admin.site.register(Usuario)

