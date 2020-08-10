from selenium import webdriver
from bs4 import BeautifulSoup as bs

class Page:
    def __init__(self,driver):
        self.driver = driver

ch = webdriver.Chrome(executable_path=r'C:/Users/gisel/Documents/Programs/chromedriver.exe')
ch.get('http://google.com')
html = ch.page_source
google_page = bs(html, 'html.parser')
print(google_page.find('a'))