require( 'dotenv' ).config();
const UnauthorizedError = require( '../errors/UnauthorizedError.js' );

const apiKey = process.env.APIKEY;

const checkApiKey = ( userApiKey ) => {
    if ( userApiKey != apiKey ) {
        throw new UnauthorizedError();
    } 
}

module.exports = {
    checkApiKey
}
