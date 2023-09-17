// Códigos de respuesta http: https://www.semrush.com/blog/http-status-codes/.

// Error personalizado para lanzar cuando el apiKey de acceso es incorrecta.
module.exports = class UnauthorizedError extends Error {
    // eslint-disable-next-line no-unused-vars
    constructor( message ) {
        super( 'Para acceder a este enpoint se requiere un apiKey válida.' );
        this.name = 'UnauthorizedError';
    }
};
