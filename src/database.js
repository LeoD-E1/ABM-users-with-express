const mongoose = require('mongoose')
mongoose.connect('mongodb://uihwijdpacutgpqwawmf:XjxSVCci5EjL0ZjuuGDE@bh5ezvxllokyyhj-mongodb.services.clever-cloud.com:27017/bh5ezvxllokyyhj', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('La base de datos esta conectada'))
    .catch(error => console.error(error))

module.exports = mongoose;