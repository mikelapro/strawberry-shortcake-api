//#region Imports

require( 'dotenv' ).config();
const UnauthorizedError = require( '../errors/UnauthorizedError.js' );

//#endregion

//#region Declarations

const apiKey = process.env.APIKEY;

//#endregion

//#region Usecase

/**
 * Verefica que el userApiKey sea el mismo que el apiKey de acceso al api (ver APIKEY en 
 * variables de entorno).
 * @param {String} userApiKey ApiKey de acceso a funciones restrigidas.
 * @throws {UnauthorizedError} Error personalizado para lanzar cuando el apiKey de acceso es incorrecta.
 */
const checkApiKey = ( userApiKey ) => {
    if ( userApiKey != apiKey ) {
        throw new UnauthorizedError();
    }
};

//#endregion

module.exports = {
    checkApiKey
};
