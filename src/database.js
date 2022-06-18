const mongoose = require('mongoose')

mongoose.connect('mongodb://otromongo/mimongodatabase',{
      useNewUrlParser: true,
      useUnifiedTopology: true

})

     
       .then(db => console.log('DB esta conectado a', db.connection.host))
       .catch(err => console.error(err));
