import socket
import pickle


HEADERSIZE = 10

socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.bind(('10.0.0.103', 3000))
socket.listen(5)

while True:
    clientsocket, address = socket.accept()
    print(f"Connection from {address} hasbeen established!")
    
    dic = {1: "Hey", 2: "There"}
    msg = pickle.dumps(dic)

    msg = bytes(f'{len(msg):<{HEADERSIZE}}', "utf-8") +msg

    clientsocket.send(msg)
    """ clientsocket.close() """