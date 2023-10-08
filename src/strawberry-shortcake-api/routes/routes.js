//#region Imports

const controllers = require( '../controllers/controllers.js' );
const { Router } = require( 'express' );

//#endregion

//#region Declarations

const router = Router();

//#endregion

//#region Routes

// Endpoint: GET / - Ej: http://localhost:3000
router.get( '/', controllers.getApiInfo );

// Endpoint: GET /characters - Ej: http://localhost:3000/characters
router.get( '/characters', controllers.getCharacters ); 

router.get( '/characters/summary', controllers.getCharactersSummary ); 

// Endpoint: GET /characters/:id - Ej: http://localhost:3000/characters/65070e920d5d0ed33b70cf39
router.get( '/characters/:id', controllers.getCharacter );

// Endpoint: POST /characters
router.post( '/characters/list', controllers.addCharacters );

// Endpoint: POST /characters
router.post( '/characters', controllers.addCharacter );

// Endpoint: DELETE /characters/:id - Ej: http://localhost:3000/characters/65070e920d5d0ed33b70cf39
router.delete( '/characters/:id', controllers.deleteCharacter );

// Endpoint: PUT /characters/:id - Ej: http://localhost:3000/characters/65070e920d5d0ed33b70cf39
router.put( '/characters/:id', controllers.updateCharacter );

router.get( '/teapot', controllers.imATeapot );

// Endpoint: GET /* - Ej: http://localhost:3000/culquiera
router.get( '/*', controllers.notFound );

//#endregion

module.exports = router;
