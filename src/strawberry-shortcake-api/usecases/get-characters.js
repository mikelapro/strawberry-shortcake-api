//#region Imports

const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

/**
 * Obtiene un array de characters.
 * @returns Array de characters.
 */
const getCharacters = async () => {
    const characters = await characterRepository.getAll( {} );

    return characters;
};

//#endregion

module.exports = {
    getCharacters
};
