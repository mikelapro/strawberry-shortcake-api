const { addCharacter } = require( './add-character.js' );

const addCharacters = ( characters ) => {
    characters.forEach( character => {
        let newCharacter = addCharacter( character );
    } );
}

module.exports = { addCharacters }
