//#region Imports

const { addCharacter } = require( './add-character.js' );

//#endregion

//#region Usecase

/**
 * Inserta el array de characters especificado como nuevos characters (uso interno para setup).
 * @param {Character[]} characters Datos del nuevo character.
 */
const addCharacters = ( characters ) => {
    characters.forEach( character => {
        //let newCharacter = addCharacter( character );
        addCharacter( character );
    } );
};

//#endregion

module.exports = { addCharacters };
