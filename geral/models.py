from django.db import models
from uuid import uuid4

def upload_media(instance , filename):
   return f"(instance.id_produto)-(filename)"".jpg"

class Publicacao(models.Model):
   id_publicacao = models.UUIDField(primary_key=True, default=uuid4)
   nome = models.CharField(max_length=255)
   endereco =  models.CharField(max_length=254)
   texto_explicativo = models.TextField()
   valor = models.PositiveIntegerField(null = True, default = None)
   image = models.ImageField(upload_to= upload_media, blank = True, null = True)


   def __str__(self):
      return self.nome
        
class Usuario(models.Model): 
      id_user = models.UUIDField(primary_key=True, default=uuid4 , editable = False)
      nomeUser = models.TextField(max_length=255)
      emailUser = models.EmailField(max_length=255, unique = True)
      senhaUser = models.CharField(max_length=255)
      idadeUser = models.IntegerField()
      username =  None 

      USERNAME_FIELD = 'emailUser'
      REQUIRED_FIELDS = ['nomeUser','senhaUser', 'idadeUser']

      def __str__(self):
         return self.nomeUser
      
      