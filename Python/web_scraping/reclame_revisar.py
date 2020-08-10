from bs4 import BeautifulSoup as bs
from selenium import webdriver

base_url = 'https://www.reclameaqui.com.br/'
url_site = f'{base_url}/empresa/net-tv-banda-larga-e-telefone/lista-reclamacoes/'

ch = webdriver.Chrome(executable_path=r'C:/Users/gisel/Documents/Programs/chromedriver.exe')
ch.get(url_site)
bs_obj = bs(ch.page_source, 'html.parser')

