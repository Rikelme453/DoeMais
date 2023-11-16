from django.shortcuts import render
from django.http import HttpResponse

"""from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response"""

 

"""@api_view(['GET','POST'])
def produto(request):
   products = Produto.objects.all()
   serialized_products = ProdutosSerializers(products , many=True )
   return Response(serialized_products.data , status=status.HTTP_201_CREATED)

@api_view(['GET','POST'])
def users(request):
   users = Usuario.objects.all()
   serialized_users = UsuariosSerializers(users, many=True )
   return Response(serialized_users.data , status=status.HTTP_201_CREATED)"""

def view_test(request): 
   return HttpResponse('Bom dia?') 
