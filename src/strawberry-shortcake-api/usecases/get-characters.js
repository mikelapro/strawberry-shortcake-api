//#region Imports

const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

/**
 * Obtiene un array de characters.
 * @returns Array de characters.
 */
const getCharacters = async ( query ) => {
    // if( Object.entries( query ).length ){
    // }

    //const characters = await characterRepository.getAll( {} );
    const characters = await characterRepository.getAll( query );

    return characters;
};

//#endregion

module.exports = {
    getCharacters
};
