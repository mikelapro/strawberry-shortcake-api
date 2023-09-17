//#region Imports

const controllers = require( '../controllers/controllers.js' );
const { Router } = require( 'express' );

//#endregion

//#region Declarations

const router = Router();

//#endregion

//#region Routes

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

//#endregion

module.exports = router;
