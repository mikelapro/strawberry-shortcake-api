//#region Imports

require( 'dotenv' ).config();
const UnauthorizedError = require( '../errors/UnauthorizedError.js' );

//#endregion

//#region Declarations

const apiKey = process.env.APIKEY;

//#endregion

//#region Usecase

const checkApiKey = ( userApiKey ) => {
    if ( userApiKey != apiKey ) {
        throw new UnauthorizedError();
    }
};

//#endregion

module.exports = {
    checkApiKey
};
