//#region Imports

const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

/**
 * Elimina el character correspondiente al id especificado.
 * @param {String} id Identificador del character a eliminar.
 */
const deleteCharacter = async ( id ) => {
    await characterRepository.remove( id );
};

//#endregion

module.exports = { deleteCharacter };
