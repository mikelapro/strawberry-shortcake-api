// Controllers = lógica de los endpoints.

//#region Imports

const usecases = require( '../usecases/index.js' );

//#endregion

//#region Controllers

const getApiInfo = async ( req, res ) => {
    res.status( 200 ).json( usecases.getApiInfo() );
}

const getCharacters = async ( req, res ) => {
    res.status( 200 ).json( await usecases.getCharacters() );
}

const getCharacter = async ( req, res ) => {
    // const id = parseInt( req.params.id ); // Convierte el parámetro id en number.
    const id = req.params.id;
    res.status( 200 ).json( await usecases.getCharacter( id ) );
}

const addCharacter = ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );
    res.status( 200 ).json( usecases.addCharacter( req.body ) );
}

const addCharacters = ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );
    res.status( 200 ).json( usecases.addCharacters( req.body ) );
}

const deleteCharacter = async ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );

    // const id = parseInt( req.params.id );
    const id = req.params.id;
    await usecases.deleteCharacter( id );
    res.status( 204 ).send();
}

const updateCharacter = async ( req, res ) => {
    usecases.checkApiKey( req.query.apiKey );

    // const id = parseInt( req.params.id );
    const id = req.params.id;

    res.status( 200 ).json( await usecases.updateCharacter( id, req.body ) );
}

const imATeapot = ( req, res ) => {
    res.status( 418 ).json( {
        message: 'I’m a teapot.',
        link: 'https://www.google.com/teapot',
    } );
}

const notFound = ( req, res ) => {
    res.status( 404 ).json( { Error: 'Ruta no encontrada' } );
}

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
}
