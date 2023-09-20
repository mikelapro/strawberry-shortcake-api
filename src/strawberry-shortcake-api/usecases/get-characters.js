//#region Imports

const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

const getCharacters = async () => {
    const characters = await characterRepository.getAll( {} );

    return characters;
};

//#endregion

module.exports = {
    getCharacters
};
