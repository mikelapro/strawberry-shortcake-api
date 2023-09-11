/*
index.js: Archivo pricipal del api.
    routes: Contiene las rutas de los endpoints y sus controllers.
        controllers: Contiene las funciones a ejecutar para cada endpoint.
            usecases: Contiene las funciones de la lógica de la app/api.
                store: Contiene las funciones de escritura/lectura del estado de la app/api (los datos en memoria).
    
    models: Clases de los objetos con los que se modela la app/api.
    middelwares: Funciones generales que se usan con expressjs. 
    errors: Errores personalizados que se lanzan desde la app/api.
*/

const express = require( 'express' );
const usecases = require( './usecases/index.js' );
const { globalErrorHandler } = require( './middlewares/errors.js' );
const db = require( './repositories/db-connection.js' );
require( 'dotenv' ).config();

const port = process.env.PORT;
const api = express();

db.connect();

// Configuración de expressjs para que lea el body en formato json. 
api.use( express.json() );

// TODO: Sacar esto. Deberian estar en base de datos.
// Inicializa los personajes en memoria.
//usecases.inicializarCharacters();

// api.get( '/', controllers.getApiInfo );
//api.use('/', controllers.getApiInfo);

// Importa las rutas de los endpoints.
api.use( require( './routes/routes.js' ) );

// Middleware - Tratamiento de errores global.
// *NOTE: Tiene que estar luego de los endpoints.
api.use( globalErrorHandler );

// Oreja escuchando en el puerto {port}.
api.listen( port, () => {
    console.log( `Example API listening on port ${port}` );
    console.log( `Http://localhost:${port}` );
    console.log( `Http://localhost:${port}/teapot` );
} );
