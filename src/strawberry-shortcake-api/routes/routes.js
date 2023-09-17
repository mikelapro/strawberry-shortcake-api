// module.exports = ( api ) => {
//     const controllers = require( '../controllers/controllers.js' );

//     // Endpoint: GET /
//     api.get( '/', controllers.getApiInfo ); // TODO: Este no anda... moverlo a index. Ver:
//     // TODO: https://github.com/suhailkakar/Node-Express-MongoDB-Restful-CRUD-API/blob/main/server.js

//     // Endpoint: GET /characters - Ej: http://localhost:3000/characters
//     api.get( '/characters', controllers.getCharacters );

//     // Endpoint: GET /characters/:id - Ej: http://localhost:3000/characters/7
//     api.get( '/characters/:id', controllers.getCharacter );

//     // Endpoint: POST /characters
//     api.post( '/characters', controllers.addCharacter );

//     // Endpoint: DELETE /characters/:id - Ej: http://localhost:3000/characters/7
//     api.delete( '/characters/:id', controllers.deleteCharacter );

//     // Endpoint: PUT /characters/:id - Ej: http://localhost:3000/characters/7
//     api.put( '/characters/:id', controllers.updateCharacter );

//     api.get( '/teapot', controllers.imATeapot );

//     // Endpoint: GET /* - Ej: http://localhost:3000/culquiera
//     api.get( '/*', controllers.notFound );
// }

const controllers = require( '../controllers/controllers.js' );
const { Router } = require( 'express' );
const router = Router();

// router.get( '/', controllers.getApiInfo );
router.get( '/', controllers.getApiInfo );

// Endpoint: GET /characters - Ej: http://localhost:3000/characters
router.get( '/characters', controllers.getCharacters ); 

// Endpoint: GET /characters/:id - Ej: http://localhost:3000/characters/7
router.get( '/characters/:id', controllers.getCharacter );

// Endpoint: POST /characters
router.post( '/characters/list', controllers.addCharacters );

// Endpoint: POST /characters
router.post( '/characters', controllers.addCharacter );

// Endpoint: DELETE /characters/:id - Ej: http://localhost:3000/characters/7
router.delete( '/characters/:id', controllers.deleteCharacter );

// Endpoint: PUT /characters/:id - Ej: http://localhost:3000/characters/7
router.put( '/characters/:id', controllers.updateCharacter );

router.get( '/teapot', controllers.imATeapot );

// Endpoint: GET /* - Ej: http://localhost:3000/culquiera
router.get( '/*', controllers.notFound );

module.exports = router;
