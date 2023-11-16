from django.test import TestCase
from ...api.viewsets import Produto

class ProdutoTestCase(TestCase):

      
    def setUp(self): 
        Produto.objects.create(
            nome="Teclado Led",
            fab = "Stark Industries",
            quantidade = 12

        )
        
    def test_return_string(self):
        p1 = Produto.objects.get(nome ='Teclado Led')
        self.assertEqual(p1. __str__(), 'Teclado Led')