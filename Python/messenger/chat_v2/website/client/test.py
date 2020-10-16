from socket import AF_INET, socket, SOCK_STREAM
from threading import Thread

HOST = 'localhost'
PORT = 3000
BUFSIZ = 1024
ADDR = (HOST, PORT)

messages = []

client_socket = socket(AF_INET, SOCK_STREAM)
client_socket.connect(ADDR)

def receive_messages():
    while True:
        try:
            msg = client_socket.recv(BUFSIZ)
            messages.append(msg)
            print(msg)
        except Exception as e:
            print("[EXCEPTION]", e)
            break


def send_message(msg):
    client_socket.send(bytes(msg, "utf-8"))
    if msg == "{quit}":
        client_socket.close()


receive_thread = Thread(target=receive_messages)
receive_thread.start()