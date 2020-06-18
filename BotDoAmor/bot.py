from selenium import webdriver
import time
import random

class WhatsappBot:
    def __init__(self):
        self.mensagem = ['Hey!!!! Melhor presente de tooodooooos ...', 'É um SPAMM \o/\o/', 'I Love you', ' = ', 'Melhor Gamer ever', 'Beba água', 'Coma chocolate', 'Feliz Aniversário Gafs']
        self.findEmoji = ["birthday", "hearts", "moon", "birthday", "hearts", "moon", "birthday", "hearts"]
        self.contatos = ["Base"]
        # Quantidade de vezes que o bot vai rodar
        self.repeat = 4
        self.repeatEmoji = random.randint(1,8)
        options = webdriver.ChromeOptions()
        options.add_argument('lang=pt-br')
        self.driver = webdriver.Chrome(executable_path=r'./chromedriver.exe')

    def SelecionaEmoji(self):
        e = random.randint(1,3)
        for i in range(e):
            botao_emoji = self.driver.find_element_by_xpath("//span[@data-icon='smiley']")
            time.sleep(2)
            botao_emoji.click()
            time.sleep(3)
            emoji_box = self.driver.find_element_by_class_name('_1qTcI')
            time.sleep(3)
            emoji_box.click()
            time.sleep(3)
            word = random.choice(self.findEmoji)
            if word == 'hearts':
                var = 3
            elif word == 'moon':
                var = 1
            else:
                var = 5
            emoji_box.send_keys(f"{word}")
            time.sleep(3)
            emoji_class = self.driver.find_element_by_class_name('_1kf8y')
            while self.repeatEmoji > 0:
                self.repeatEmoji -=1
                n = random.randint(0,var)
                emoji = self.driver.find_element_by_xpath(f"//span[@data-emoji-index='{n}']")
                emoji_class.click()
                time.sleep(2)
                emoji.click()
                time.sleep(2)
            time.sleep(2)
            botao_sair = self.driver.find_element_by_xpath("//span[@data-icon='x']")
            botao_sair.click()
            time.sleep(2)
            self.repeatEmoji = random.randint(1,8)
        self.Enviar()

    def Enviar(self):
        botao_enviar = self.driver.find_element_by_xpath("//span[@data-icon='send']")
        time.sleep(3)
        botao_enviar.click()
        time.sleep(5)

    def EnviarMensagem(self):
        # Abre o whatsapp no chrome
        self.driver.get('https://web.whatsapp.com')
        time.sleep(5)
        # Seleciona o contato
        for  contato in self.contatos:
            contato = self.driver.find_element_by_xpath(f"//span[@title='{contato}']")
            time.sleep(3)
            contato.click()
            # Escreve a mensagem selecionada 
            while self.repeat > 0:
                self.repeat-=1
                m = random.randint(1,5)
                for i in range(m):
                    chat_box = self.driver.find_element_by_class_name('_3uMse')
                    time.sleep(3)
                    chat_box.click()
                    chat_box.send_keys(random.choice(self.mensagem))
                    self.Enviar()
                self.SelecionaEmoji()
                #emoji_box.send_keys(self.findEmoji)
        
                

bot = WhatsappBot()
bot.EnviarMensagem()