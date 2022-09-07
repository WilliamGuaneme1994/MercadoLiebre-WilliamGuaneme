const express = require("express");
const path = require ("path");

const app = express();

app.get('/mostrar_mensaje', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});
app.get('/register', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));  // Permite enviar un archivo HTML
});
app.get('/login', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));  // Permite enviar un archivo HTML
});


//const publicpatc =  path.resolve(__dirname,'./public');
//app.use (express.static(publicpatc));
app.use(express.static(path.resolve(__dirname, './public')));

app.listen(3009, () =>{
    console.log("servidor corriendo en el puerto 3008");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("servidor corriendo");

})