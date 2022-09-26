//importamos express

const express = require('express')

const path = require('path')


//ejecutamos la express en la constante app

const app = express()

//middelewares para dirigir a /public/index.js

app.use(express.static(path.join(__dirname, 'public')))


//configuracion del puerto
const port = 3000;
app.set(port, 3000)
app.listen(app.get(port), ()=>{

    console.log(`aplicaciones escuchando puerto ${port}`)

})



