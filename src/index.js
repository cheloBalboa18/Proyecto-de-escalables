require('dotenv').config();//carga las variables de entorno

//encargado de arrancar el servidor
const app = require('./server');
require('./database');
console.log(process.env.TESTING);

app.listen(app.get('port'),() => {
    console.log('Server on port ', app.get('port'));
})