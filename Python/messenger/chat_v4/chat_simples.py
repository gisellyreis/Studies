import socket
import threading
import sys

class Server:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    connections = []

    def __init__(self):
        self.sock.bind(('0.0.0.0', 3000))
        # define a quantidade de "portas sendo ouvidas"
        self.sock.listen()


    def handler(self, client, a):
        while True:
            data = client.recv(1024)
            for connection in self.connections:
                connection.send(data)
            if not data:
                print(str(a[0]) + ':' + str(a[1]), "disconnected"))
                self.connections.remove(client)
                client.close()
                break
    

    def run(self):
        while True:
            client, a = self.sock.accept()
            clientThread = threading.Thread(target=self.handler, args=(client, a))
            clientThread.daemon = True
            clientThread.start()
            self.connections.append(client)
            print(str(a[0]) + ':' + str(a[1]), "connected"))


class Client:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    def sendMsg(self):
        while True:
            self.sock.send(bytes(input(""), 'utf-8'))

    def __init__(self, address):
        self.sock.connect((address, 3000))

        iThread = threading.Thread(target=self.sendMsg)
        iThread.daemon = True
        iThread.start()

        while True:
            data = self.sock.recv(1024)
            if not data:
                break
            print(str(data, 'utf-8'))


if (len(sys.argv) > 1):
    client = Client(sys.argv[1])
else:
    server = Server()
    server.run()