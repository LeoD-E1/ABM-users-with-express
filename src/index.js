const express = require('express')
const morgan = require('morgan')
const path = require('path')

const {mongoose} = require('./database')

const app = express()


// Settings
app.set('port', process.env.PORT || 3000) // Para que tone el puerto del SO sino el 3000

// Middleweares : Funciones que se ejecutan antes de pasar por las rutas
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/users', require('./routes/users.routes'))

// Statics files
app.use(express.static(path.join(__dirname, 'public')))

// Server listening
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})