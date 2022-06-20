const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/basededatos')
   .then(db => console.log('DB esta conectado a:', db.connection.host))
   .catch(err => console.error(error));