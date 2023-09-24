//#region Imports

const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

/**
 * Obtiene el character correspondiente al id especificado.
 * @param {String} id Identificador del character a obtener.
 * @returns El character correspondiente al id.
 */
const getCharacter = async ( id ) => {
    const character = await characterRepository.getById( id );

    return character;
};

//#endregion

module.exports = { getCharacter };
