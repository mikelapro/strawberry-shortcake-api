// Códigos de respuesta http: https://www.semrush.com/blog/http-status-codes/.

// Error personalizado para lanzar cuando el apiKey de acceso es incorrecta.
module.exports = class UnauthorizedError extends Error {
    constructor( message ) {
        super( 'Para acceder a este enpoint se requiere un apiKey válida.' );
        this.name = 'UnauthorizedError';
    }
}
