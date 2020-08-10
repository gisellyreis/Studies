# marcar um evento 

import sched
import time

from datetime import datetime, timedelta

scheduler = sched.scheduler(timefunc=time.time)

def reschedule():
  # new_target = datetime.now().replace(second=0, microsecond=0)
  # new_target += timedelta(seconds=30)
  # print(new_target)

   # scheduler.enterabs(new_target.timestamp(), priority=0, action=saytime)
   scheduler.enterabs(datetime(2020, 5, 11, 21, 25).timestamp(), priority=0, action=saytime)

def saytime():
    print(time.ctime())
    # reschedule()

# reschedule()
scheduler.enterabs(datetime(2020, 5, 11, 21, 27).timestamp(), priority=0, action=saytime)


scheduler.run(blocking=True)