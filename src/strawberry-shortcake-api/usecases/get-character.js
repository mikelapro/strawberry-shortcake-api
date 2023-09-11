// const state = require( '../store/store.js' );
const characterRepository = require( '../repositories/character.repository.js' );

// Proceso.
const getCharacter = async ( id ) => {
    // const character = state.characters.find( object => object.id === id );
    const character = await characterRepository.getById( id );

    return character;
}

module.exports = { getCharacter }
