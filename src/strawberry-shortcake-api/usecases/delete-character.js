// const state = require( '../store/store.js' );
const characterRepository = require( '../repositories/character.repository.js' );

const deleteCharacter = async ( id ) => {
    // const index = state.characters.findIndex( char => char.id === id );
    // state.characters.splice( index, 1 );
    await characterRepository.remove( id );
}

module.exports = { deleteCharacter }
