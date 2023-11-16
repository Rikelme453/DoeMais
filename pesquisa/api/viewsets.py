from rest_framework import viewsets
from  pesquisa.api import serializers
from pesquisa import models
from ..models import Produto , Usuario
from django.views.decorators.http import require_GET


class ProdutosViewSets(viewsets.ModelViewSet):
    serializer_class =  serializers.ProdutosSerializers
    queryset = models.Produto.objects.all()

def get_queryset(self): 
    query = Produto.objects.all()
    nome = self.request.query_params.get('nome')
    if nome is not None: 
        query = query.filter(nome_icontains = nome)
    return query


class UsuariosViewSets(viewsets.ModelViewSet):
    serializer_class =  serializers.UsuariosSerializers
    queryset = models.Usuario.objects.all()

@require_GET
def query(request):
   nome_usuario = request.GET['nome']
   email_usuario =  request.GET['email']
   senha_usuario =  request.GET['senha']
   idade_usuario = request.GET['idade']

   novoUsuario = Usuario.objects.create_user(nomeUser = nome_usuario , emailUser = email_usuario, senhaUser = senha_usuario , idadeUser = idade_usuario  )
   novoUsuario.save()
   
   

    