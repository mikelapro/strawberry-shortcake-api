//#region Imports

const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

/**
 * Obtiene un array de characters.
 * @returns Array de characters.
 */
const getCharactersSummary = async () => {
    //const characters = await characterRepository.getAll( {} );
    const characters = await characterRepository.getAllSummary( {}, {'_id':1, 'name':1} );

    return characters;
};

//#endregion

module.exports = {
    getCharactersSummary
};
