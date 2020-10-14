from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route("/")
def home():
    return open('index.html').read()


@socketio.on('message')
def message_received(data):
    print(data)
    emit('message', data, broadcast=True)


if __name__ == '__main__':
    socketio.run(app, 'localhost', 3000)