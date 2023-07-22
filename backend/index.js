const express = require('express');
const cors = require('cors');
const app = express();


const routerCategorias = require('./router/routerCategorias');

app.use(cors());

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hola mundo')
});

app.use('/categorias', routerCategorias);


app.listen(3001,()=>{
    console.log("API escuchando por el puerto 3001");
    
});

