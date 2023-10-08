/*
index.js: Archivo pricipal del api.
    routes: Contiene las rutas de los endpoints y sus controllers.
        controllers: Contiene las funciones a ejecutar para cada endpoint.
            usecases: Contiene las funciones de la lógica de la app/api.
                store: Contiene las funciones de escritura/lectura del estado de la app/api (los datos en memoria).
                repositories: Controla la persistencia (lectura y escritura) de datos en una base de datos.
    
    models: Clases de los objetos con los que se modela la app/api.
    middelwares: Funciones generales que se usan con expressjs. 
    errors: Errores personalizados que se lanzan desde la app/api.
*/

//#region Imports

const express = require( 'express' );
const { globalErrorHandler } = require( './middlewares/errors.js' );
const db = require( './repositories/db-connection.js' );
require( 'dotenv' ).config();

//#endregion

//#region Declarations

const port = process.env.PORT;
const api = express();

//#endregion

//#region

// Se conecta a la base de datos.
db.connect();

// Configuración de expressjs para que lea el body en formato json. 
api.use( express.json() );

// Importa las rutas de los endpoints.
api.use( require( './routes/routes.js' ) );

// Middleware - Tratamiento de errores global.
// *NOTE: Tiene que estar luego de los endpoints/routes.
api.use( globalErrorHandler );

// Oreja escuchando en el puerto {port} los request al api.
api.listen( port, () => {
    console.log( `API listening on port ${port}` );
    console.log( `Http://localhost:${port}` );
    console.log( `Http://localhost:${port}/teapot` );
} );

//#endregion
