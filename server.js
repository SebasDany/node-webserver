const express = require('express');//llamada al odulo express
const app = express();
// hacendo el llamdado al modulo hbs
const hbs = require('hbs');
require('./hbs/helpers');
// inicializacion del puerto para el servidor web y tambien el process.env.PORT para buscar el puerto al momento de subir a heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');// permite heredar el contenido en este caso el header,navbar, footer.
app.set('view engine', 'hbs');
// hacendo el metodo get para que nos retorne todo lo que contien en home.hbs
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "Sebastian Guandinango"
    });
});

app.get('/about', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about');// renderiza a la pagina about.hbs
});
//escucaha o busca el puerto de salida determinada
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});