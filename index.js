const express = require('express');
const personasRouter = require('./api/personas')

const app = express();

const port = 3000;

app.get("/", function(req, res, next){
    res.send("App express")
})

app.use('/api/personas', personasRouter);

app.get("/a", function(req, res, next){
    res.send("otra ruta")
})



app.listen(port, () => {
    console.log('Ejecutando servidor en puerto ${port}')
})

