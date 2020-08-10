import requests
from bs4 import BeautifulSoup as bfs

# Pega lista de links no portal de noticias fametro

url = 'https://fametro.edu.br/tag/portal/'

req = requests.get(url)

soup = bfs(req.content, 'html.parser')

lista_noticias = soup.find_all('article', class_='mk-blog-modern-item mk-isotop-item image-post-type')

for lista_titulos in lista_noticias:
    lista = lista_titulos.find_all('h3', class_='the-title')
    for lista_dados in lista:
        print(lista_dados.next_element)
        print()