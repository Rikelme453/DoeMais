from django.db import models
from uuid import uuid4
from django.contrib.auth.models import AbstractBaseUser, UserManager 

def upload_media(instance , filename):
   return f"(instance.id_produto)-(filename)"".jpg"

class Produto(models.Model):
   id_produto = models.UUIDField(primary_key=True, default=uuid4)
   nome = models.CharField(max_length=255)
   fab =  models.CharField(max_length=254)
   quantidade = models.PositiveIntegerField()
   valor = models.PositiveIntegerField(null = True, default = None)
   image = models.ImageField(upload_to= upload_media, blank = True, null = True)


   def __str__(self):
      return self.nome

class NewUserManager(UserManager):

    def create_user(self,emailUser,nomeUser,senhaUser,idadeUser):
        """Create a new user profile"""
        if not emailUser:
            raise ValueError('Usuário deve ter um email válido')
        
        
        emailUser = self.normalize_email(emailUser) 
        user = self.model(emailUser = emailUser,nomeUser=nomeUser, senhaUser=senhaUser, idadeUser=idadeUser) 
        user.save(using=self.db)
        return user
        
class Usuario(models.Model): 
      id_user = models.UUIDField(primary_key=True, default=uuid4 , editable = False)
      nomeUser = models.TextField(max_length=255)
      emailUser = models.EmailField(max_length=255, unique = True)
      senhaUser = models.CharField(max_length=255)
      idadeUser = models.IntegerField()
      username =  None 

      objects =  UserManager()

      USERNAME_FIELD = 'emailUser'
      REQUIRED_FIELDS = ['nomeUser','senhaUser', 'idadeUser']

      def __str__(self):
         return self.nomeUser
      
      