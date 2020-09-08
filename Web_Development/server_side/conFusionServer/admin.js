const { db } = require("./models/user");

db.users.update({"username": "admin"}, {$set: {"admin": true}})