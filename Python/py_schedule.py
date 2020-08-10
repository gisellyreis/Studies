# exemplo que diz a hora

import sched
import time

scheduler = sched.scheduler()

def saytime():
    print(time.ctime())
    scheduler.enter(delay=10, priority=0, action=saytime)

saytime()

try:
    scheduler.run(blocking=True)
except KeyboardInterrupt:
    print('Parei o sched')