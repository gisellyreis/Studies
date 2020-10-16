from flask import Flask, render_template, url_for, redirect, session,jsonify, request
from client import Client
from threading import Thread
import time

name_key = 'name'
c = None
messages = []

app = Flask(__name__)
app.secret_key = "hello"

def disconnect():
    global c
    if c != None:
        c.disconnect()

@app.route("/login", methods=["POST", "GET"])
def login():
    disconnect()
    if request.method == "POST":
        session[name_key] = request.form["inputName"]
        return redirect(url_for("home"))
    return render_template("login.html")

@app.route("/logout")
def logout():
    disconnect()
    session.pop(name_key, None)
    return redirect(url_for("login"))

@app.route("/")
@app.route("/home")
def home():
    global c
    if name_key not in session:
        return redirect(url_for("login"))

    c = Client(session[name_key])
    return render_template("index.html")

@app.route("/run", methods=["GET"])
def run():
    global c
    msg = request.args.get("value")
    if c:
        c.send_message(msg)
    
    return "none"
    #print(msg) 


@app.route("/get_messages")
def get_messages():
    return jsonify({"messages": messages})


def update_messages():
    global messages
    while True:
        time.sleep(0.1)
        if not c:
            continue
        new_messages = c.get_messages()
        messages.extend(new_messages)

        for msg in new_messages:
            if msg == "{quit}":
                break



if __name__ == "__main__":
    Thread(target=update_messages).start()
    app.run(debug=True)