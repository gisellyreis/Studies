from selenium import webdriver

class Google:
    def __init__(self, driver):
        self.driver = driver
        self.url = 'https://www.google.com'
        self.search_bar = 'gLFyf' # input de busca
        self.btn_search = 'btnK'
        self.btn_lucky = 'btnI'

    def navigate(self):
        self.driver.get(self.url)
    
    def search(self, word='None'):
        self.driver.find_element_by_class_name(
            self.search_bar).send_keys(word)
        self.find_element_by_name(
            self.btn_search).click()

    def lucky(self, word='None'):
        self.driver.find_element_by_class_name(
            self.search_bar).send_keys(word)
        self.find_element_by_name(
            self.btn_lucky).click()


ch = webdriver.Chrome()
g = Google(ch)
g.navigate()
g.search('Python')
ch.quit()

""" #class_name do input
ch.find_element_by_class_name('gLFyf')

bar = ch.find_element_by_class_name('gLFyf')
bar.send_keys('Python') 
ch.find_element_by_class_name('gNO89b').click()
"""