// Códigos de respuesta http: https://www.semrush.com/blog/http-status-codes/.

/**
 * Error personalizado para lanzar cuando no se encuentre un character.
 */
module.exports = class NotFoundError extends Error {
    constructor( message ) {
        super( message );
        this.name = 'NotFoundError';
    }
};
