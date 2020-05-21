from selenium import webdriver
import time

class WhatsappBot:
    def __init__(self):
        self.mensagem = " Isso é um bot! ... "
        self.findEmoji = "hearts"
        self.contatos = ["Base"]
        self.repeat = 3
        options = webdriver.ChromeOptions()
        options.add_argument('lang=pt-br')
        self.driver = webdriver.Chrome(executable_path=r'./chromedriver.exe')

    def EnviarMensagem(self):
        # <span dir="auto" title="Gafanhoto" class="_1wjpf _3NFp9 _3FXB1">Gafanhoto</span>
        # <div class="_2S1VP copyable-text selectable-text" contenteditable="true" data-tab="1" dir="ltr" spellcheck="true"></div>
        # <div tabindex="-1" class="_3F6QL _2WovP"><div class="_39LWd" style="visibility: visible;">Taper un message</div><div class="_2S1VP copyable-text selectable-text" contenteditable="true" data-tab="1" dir="ltr" spellcheck="true"></div></div>
        # <div class="_39LWd" style="visibility: hidden">Taper un message</div>
        # <span data-icon="send" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span>
        # <span data-icon="smiley" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg></span>
        # <span class="b3 emojik wa" tabindex="-1" data-emoji-index="8" style="background-position: -32px -128px;"></span>
        # <label class="_2vjPO"><div class="_24k3z"><input class="_2U5s1 copyable-text selectable-text" type="text" dir="ltr" title="Rechercher un Emoji" placeholder="Rechercher un Emoji" value=""></div></label>
        # <div class="M6HbS"><span class="b74 emojik wa" tabindex="-1" data-emoji-index="0" style="background-position: -128px -96px;"></span><span class="b97 emojik wa" tabindex="-1" data-emoji-index="1" style="background-position: -64px 0px;"></span><span class="b62 emojik wa" tabindex="-1" data-emoji-index="2" style="background-position: -96px -128px;"></span><span class="b3 emojik wa" tabindex="-1" data-emoji-index="3" style="background-position: -32px -128px;"></span></div>

        self.driver.get('https://web.whatsapp.com')
        time.sleep(30)
        for  contato in self.contatos:
            contato = self.driver.find_element_by_xpath(f"//span[@title='{contato}']")
            time.sleep(3)
            contato.click()
            while self.repeat > 0:
                self.repeat-=1
                chat_box = self.driver.find_element_by_class_name('_1Plpp')
                time.sleep(3)
                chat_box.click()
                chat_box.send_keys(self.mensagem)
                botao_enviar = self.driver.find_element_by_xpath("//span[@data-icon='send']")
                time.sleep(3)
                botao_enviar.click()
                time.sleep(5)
                botao_emoji = self.driver.find_element_by_xpath("//span[@data-icon='smiley']")
                time.sleep(2)
                botao_emoji.click()
                emoji_box = self.driver.find_element_by_class_name('_2vjPO')
                time.sleep(3)
                emoji_box.click()
                emoji_box.send_keys(self.findEmoji)
                emoji_class = self.driver.find_element_by_class_name('M6HbS')
                emoji_class.click()
                emoji = self.driver.find_element_by_xpath("//span[@data-emoji-index='3']")
                time.sleep(2)
                emoji.click()
                time.sleep(2)
                botao_sair = self.driver.find_element_by_xpath("//span[@data-icon='x']")
                botao_sair.click()
                time.sleep(2)
                botao_enviar = self.driver.find_element_by_xpath("//span[@data-icon='send']")
                time.sleep(2)
                botao_enviar.click()
                

bot = WhatsappBot()
bot.EnviarMensagem()