from socket import AF_INET, socket, SOCK_STREAM
from threading import Thread
import time
from person import Person

HOST = '10.0.0.102'
PORT = 3000
BUFSIZ = 1024
ADDR = (HOST, PORT)
MAX_CONNECTIONS = 10

persons = []
server = socket(AF_INET, SOCK_STREAM)
server.bind(ADDR)


def broadcast(msg, name):
    """
    
    """

    for person in persons:
        client = person.client
        client.send(bytes(name, "utf-8") + msg)


def client_communication(person):
    """
    Thread to handle all messages from client
    :param person: Person
    :return: None
    """

    client = person.client

    name = client.recv(BUFSIZ).decode("utf-8")
    person.set_name(name)
    msg = bytes(f"{name} has joined the chat!", "utf-8")
    broadcast(msg, "")

    while True:
        try:
            msg = client.recv(BUFSIZ)
            if msg == bytes("{quit}", "utf-8"):
                client.close()
                persons.remove(person)
                broadcast(bytes(f"{name} has left the chat...", "utf-8"), "")
                print(f"[DISCONNECTED] {name} disconnected")
                break
            else:
                broadcast(msg, name+":")
                print(f"{name}: ", msg.decode("utf-8"))
        except Exception as e:
            print("[EXCEPTION]", e)
            break


def wait_for_connection():
    while True:
        try:
            client, addr = server.accept()
            person = Person(addr, client)
            persons.append(person)
            print(f"[CONNECTION] {addr} connected to the server at {time.time()} ")
            Thread(target=client_communication, args=(person,)).start()
        except Exception as e:
            print("[EXCEPTION]", e)
            break
    
    print("Server crashed")


if __name__ == "__main__":
    server.listen(MAX_CONNECTIONS)
    print("Waiting for connection...")
    accept_thread = Thread(target=wait_for_connection)
    accept_thread.start()
    accept_thread.join()
    server.close()