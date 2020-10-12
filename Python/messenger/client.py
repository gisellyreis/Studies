import socket
import pickle

HEADERSIZE = 10

socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.connect(('10.0.0.103', 3000))

while True:
    full_msg = b''
    new_msg = True
    while True:
        msg = socket.recv(16)
        if new_msg:
            print(f"new message legth: {msg[:HEADERSIZE]}")
            msglen = int(msg[:HEADERSIZE])
            new_msg = False

        full_msg += msg

        if len(full_msg) - HEADERSIZE == msglen:
            print("full msg recvd")
            print(full_msg[HEADERSIZE:])

            dic = pickle.loads(full_msg[HEADERSIZE:])
            print(dic)

            new_msg = True
            full_msg = b''

        print(full_msg)