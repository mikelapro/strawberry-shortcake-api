const { inicializarCharacters } = require( './inicializar-characters.js' );
const { getCharacter } = require( './get-character.js' );
const { addCharacter } = require( './add-character.js' );
const { addCharacters } = require( './add-characters.js' );
const { getCharacters } = require( './get-characters.js' );
const { deleteCharacter } = require( './delete-character.js' );
const { getApiInfo } = require( './get-api-info.js' );
const { updateCharacter } = require( './update-character.js' );
const { checkApiKey } = require( './check-api-key.js' );


module.exports = {
    inicializarCharacters,
    getCharacter,
    addCharacter,
    addCharacters,
    getCharacters,
    deleteCharacter,
    getApiInfo,
    updateCharacter,
    checkApiKey
}
