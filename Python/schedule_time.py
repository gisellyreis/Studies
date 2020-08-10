# exemplo que diz a hora

import sched
import time

scheduler = sched.scheduler()

def saytime():
    print(time.ctime())
    scheduler.enter(delay=10, priority=1, action=saytime)

def ola():
    print('Olá')
    scheduler.enter(delay=5, priority=0, action=ola)

def start():
    scheduler.enter(delay=10, priority=1, action=saytime)
    scheduler.enter(delay=5, priority=0, action=ola)

start()

try:
    scheduler.run(blocking=True)
except KeyboardInterrupt:
    print('Parei o sched')