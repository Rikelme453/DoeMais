from rest_framework import serializers
from pesquisa import models

class ProdutosSerializers(serializers.ModelSerializer):
    class Meta:
       model = models.Produto
       fields = '__all__'

class UsuariosSerializers(serializers.ModelSerializer):
    class Meta:
       model = models.Usuario
       fields = '__all__'