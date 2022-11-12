const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 3001
const sequelize = require('./database/db');
require('./database/asociations');


//Middlewere 
//para poder rellanar el req.body
//para poder leer lo que nos envian si es tipo json 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use('/contacts', require('./routes/listcontacts'))
app.use('/login', require('./routes/userlogin'))


//Arrancamos Servidor nos conectamos al servidor y arrancamos la base de datos
app.listen(port, () => {

  //nos recra las tablas Force true: Drop Tables 
  sequelize.sync({force: true}).then(()=>{
    console.log('nos hemos conectado a la base de datos' )
  }).catch(error=>{
    console.log('se ha producido un error',error)
  })
  
  

})
