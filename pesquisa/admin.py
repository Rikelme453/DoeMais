from django.contrib import admin
from .models import Produto
from .models import Usuario

admin.site.register(Produto)
admin.site.register(Usuario)

