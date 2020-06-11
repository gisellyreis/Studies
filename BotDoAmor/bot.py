from selenium import webdriver
import time
import random

class WhatsappBot:
    def __init__(self):
        self.mensagem = [""]
        self.findEmoji = ["hearts", "birthday"]
        self.contatos = ["Base"]
        self.repeat = 3
        self.repeatEmoji = 3
        options = webdriver.ChromeOptions()
        options.add_argument('lang=pt-br')
        self.driver = webdriver.Chrome(executable_path=r'./chromedriver.exe')

    def EnviarMensagem(self):
       
        self.driver.get('https://web.whatsapp.com')
        time.sleep(5)
        for  contato in self.contatos:
            contato = self.driver.find_element_by_xpath(f"//span[@title='{contato}']")
            time.sleep(3)
            contato.click()
            while self.repeat > 0:
                self.repeat-=1
                chat_box = self.driver.find_element_by_class_name('_3uMse')
                time.sleep(3)
                chat_box.click()
                chat_box.send_keys(self.mensagem)
                botao_enviar = self.driver.find_element_by_xpath("//span[@data-icon='send']")
                time.sleep(3)
                botao_enviar.click()
                time.sleep(5)
                for word in self.findEmoji:
                    botao_emoji = self.driver.find_element_by_xpath("//span[@data-icon='smiley']")
                    time.sleep(2)
                    botao_emoji.click()
                    time.sleep(3)
                    emoji_box = self.driver.find_element_by_class_name('_1qTcI')
                    time.sleep(3)
                    emoji_box.click()
                    #emoji_box = self.driver.find_element_by_class_name('wPvaz')
                    time.sleep(3)
                    emoji_box.send_keys(f"{word}")
                    time.sleep(3)
                    emoji_class = self.driver.find_element_by_class_name('_1kf8y')
                    while self.repeatEmoji > 0:
                        self.repeatEmoji -=1
                        n = random.randint(0,3)
                        emoji = self.driver.find_element_by_xpath(f"//span[@data-emoji-index='{n}']")
                        emoji_class.click()
                        time.sleep(2)
                        emoji.click()
                        time.sleep(2)
                    time.sleep(2)
                    botao_sair = self.driver.find_element_by_xpath("//span[@data-icon='x']")
                    botao_sair.click()
                    time.sleep(2)
                    botao_enviar = self.driver.find_element_by_xpath("//span[@data-icon='send']")
                    time.sleep(2)
                    botao_enviar.click()
                    self.repeatEmoji = 3
                #emoji_box.send_keys(self.findEmoji)
        
                

bot = WhatsappBot()
bot.EnviarMensagem()