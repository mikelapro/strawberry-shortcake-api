// eslint-disable-next-line no-unused-vars
const globalErrorHandler = ( err, req, res, next ) => {
    // Responde un json, pero indicando que es un error.
    // Códigos de respuesta http: https://www.semrush.com/blog/http-status-codes/.

    switch ( err.name ) {
        case 'UnauthorizedError':
            res.status( 401 ).json( {
                status: 'error',
                message: 'A valid apiKey is required to access this endpoint'
            } );
            break;

        case 'NotFoundError':
            res.status( 404 ).json( {
                status: 'error',
                message: err.message
            } );
            break;

        default:
            res.status( 500 ).json( {
                status: 'error',
                message: err.message
            } );
            break;
    }
};

module.exports = {
    globalErrorHandler
};
