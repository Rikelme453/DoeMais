from django.test import TestCase
from django.urls import reverse 

class ProdutoTestCase(TestCase):

    def test_status_code_200(self):
        resposta = self.client.get(reverse('test_view'))
        self.assertEquals(resposta.status_code , 200)
    
    def test_template_usado(self):
        resposta = self.client.get(reverse())
        