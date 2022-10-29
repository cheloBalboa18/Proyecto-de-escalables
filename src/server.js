const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');


//inicializacion
const app = express(); //servidor

//Settings
app.set('port', process.env.PORT | 4000);//si la maquina ya tiene puerto asignado, usarlo, si no, usa el 4000
app.set('views',path.join(__dirname , 'views'));
app.engine('.hbs',exphbs.engine({//configuracion de engine
    defaultLayout: 'main',//archivo principal a utilizar
    layoutsDir: path.join(app.get('views'),'layouts'),//obtiene la direccion de layouts
    partialsDir: path.join(app.get('views'),'partials'),//obtiene la direccion de partials
    extname: '.hbs',//extension a utilizar
}
));

app.set('view engine','.hbs');

//Middlewares
app.use(express.urlencoded({extended: false}));//configuracion de informacion en formato json

//Global Variables

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//Static files
app.use(express.static(path.join(__dirname , 'public')));//definicion de carpeta de archivos dinamicos
module.exports = app;