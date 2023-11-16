from rest_framework import routers
from .viewsets import ProdutosViewSets

produto_routers = routers.DefaultRouter()
produto_routers.register(r'produtos',ProdutosViewSets)
urlpatterns = produto_routers.urls
 