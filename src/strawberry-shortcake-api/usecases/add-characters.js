//#region Imports

const { addCharacter } = require( './add-character.js' );

//#endregion

//#region Usecase

const addCharacters = ( characters ) => {
    characters.forEach( character => {
        //let newCharacter = addCharacter( character );
        addCharacter( character );
    } );
};

//#endregion

module.exports = { addCharacters };
