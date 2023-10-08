// Controllers = lógica de los endpoints.

//#region Imports

const asyncHandler = require( 'express-async-handler' ); // https://zellwk.com/blog/async-await-express.
const usecases = require( '../usecases/index.js' );

//#endregion

//#region Controllers

/**
 * Obtiene información del API.
 */
const getApiInfo = asyncHandler( async ( req, res ) => {
    res.status( 200 ).json( usecases.getApiInfo() );
} );


/**
 * Obtiene un array de characters.
 */
const getCharacters = asyncHandler( async ( req, res ) => {
    //res.status( 200 ).json( await usecases.getCharacters() );
    res.status( 200 ).json( await usecases.getCharacters( req.query ) );
} );

/**
 * Obtiene un array de characters.
 */
const getCharactersSummary = asyncHandler( async ( req, res ) => {
    //res.status( 200 ).json( await usecases.getCharacters() );
    res.status( 200 ).json( await usecases.getCharactersSummary() );
} );

/**
 * Obtiene el character correspondiente al id especificado.
 */
const getCharacter = asyncHandler( async ( req, res ) => {
    //* NOTE: Si se lanzan errores desde una función async, no pasan por el middleware de 
    //* express. Para que funcione correctamente hay 2 formas. Una es poner tode dentro de 
    //* try/catch y usar el next (ver ejemplo abajo). La otra opción es usar la librería
    //* express-async-handler (ver: https://zellwk.com/blog/async-await-express).

    // const id = parseInt( req.params.id ); // Convierte el parámetro id en number.
    const id = req.params.id;
    res.status( 200 ).json( await usecases.getCharacter( id ) );
} );

// const getCharacter = asyncHandler( async ( req, res, next ) => {
//     try {
//         const id = req.params.id;
//         res.status( 200 ).json( await usecases.getCharacter( id ) );
//     } catch (error) {
//         return next( error );
//     }
// } );

/**
 * Inserta el character especificado como nuevo character.
 */
const addCharacter = ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );
    res.status( 200 ).json( usecases.addCharacter( req.body ) );
};

/**
 * Inserta el array de characters especificado como nuevos characters (uso interno para setup).
 */
const addCharacters = ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );
    res.status( 200 ).json( usecases.addCharacters( req.body ) );
};

/**
 * Elimina el character correspondiente al id especificado.
 */
const deleteCharacter = asyncHandler( async ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );

    // const id = parseInt( req.params.id );
    const id = req.params.id;
    await usecases.deleteCharacter( id );
    res.status( 204 ).send();
} );

/**
 * Actualiza el character correspondiente al id especificado con los datos del character 
 * recibido (excepto el id).
 */
const updateCharacter = asyncHandler( async ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );

    // const id = parseInt( req.params.id );
    const id = req.params.id;

    res.status( 200 ).json( await usecases.updateCharacter( id, req.body ) );
} );

/**
 * We are the teapots. We love 418 status code. https://save418.com.
 */
const imATeapot = ( req, res ) => {
    res.status( 418 ).json( {
        message: 'I’m a teapot.',
        link: 'https://www.google.com/teapot',
    } );
};

/**
 * Responde 404 cuando no se encuentra la ruta/endpoint solicitado.
 */
const notFound = ( req, res ) => {
    res.status( 404 ).json( { Error: 'Ruta no encontrada' } );
};

//#endregion

module.exports = {
    getApiInfo,
    getCharacters,
    getCharacter,
    addCharacter,
    addCharacters,
    deleteCharacter,
    updateCharacter,
    imATeapot,
    notFound,
    getCharactersSummary,
};
