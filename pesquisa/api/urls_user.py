from rest_framework import routers
from .viewsets import UsuariosViewSets

users_routers = routers.DefaultRouter()
users_routers.register(r'usuarios',UsuariosViewSets)
urlpatterns = users_routers.urls

