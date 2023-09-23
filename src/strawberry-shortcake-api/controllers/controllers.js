// Controllers = lógica de los endpoints.

//#region Imports

const usecases = require( '../usecases/index.js' );

//#endregion

//#region Controllers

/**
 * Obtiene información del API.
 */
const getApiInfo = async ( req, res ) => {
    res.status( 200 ).json( usecases.getApiInfo() );
};


/**
 * Obtiene un array de characters.
 */
const getCharacters = async ( req, res ) => {
    res.status( 200 ).json( await usecases.getCharacters() );
};

/**
 * Obtiene el character correspondiente al id especificado.
 */
const getCharacter = async ( req, res ) => {
    // const id = parseInt( req.params.id ); // Convierte el parámetro id en number.
    const id = req.params.id;
    res.status( 200 ).json( await usecases.getCharacter( id ) );
};

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
const deleteCharacter = async ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );

    // const id = parseInt( req.params.id );
    const id = req.params.id;
    await usecases.deleteCharacter( id );
    res.status( 204 ).send();
};

/**
Actualiza el character correspondiente al id especificado con los datos del character 
 * recibido (excepto el id).
 */
const updateCharacter = async ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );

    // const id = parseInt( req.params.id );
    const id = req.params.id;

    res.status( 200 ).json( await usecases.updateCharacter( id, req.body ) );
};

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
};
