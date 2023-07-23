const express = require('express');
const cors = require('cors');
const app = express();


const routerReservas = require('./router/routerReservas');
const routerTours = require('./router/routerTours');
const routerUsuarios = require('./router/routerUsuarios');

app.use(cors());
app.use(express.json());

app.use('/usuarios', routerUsuarios);
app.use('/reservas', routerReservas);
app.use('/tours', routerTours);



app.listen(3001,()=>{
    console.log("API escuchando por el puerto 3001");
});

