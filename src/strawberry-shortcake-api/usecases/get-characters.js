// const state = require( '../store/store.js' );
const characterRepository = require( '../repositories/character.repository.js' );

const getCharacters = async () => {
    // return state.characters;
    const characters = await characterRepository.getAll( {} );

    return characters;
}

module.exports = {
    getCharacters
}
