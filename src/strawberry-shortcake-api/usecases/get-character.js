//#region Imports

const NotFoundError = require( '../errors/NotFoundError.js' );
const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

/**
 * Obtiene el character correspondiente al id especificado.
 * @param {String} id Identificador del character a obtener.
 * @returns El character correspondiente al id.
 */
const getCharacter = async ( id ) => {
    try {
        const character = await characterRepository.getById( id );

        if ( character == undefined || character == null ) {
            throw new NotFoundError( `Character ${id} not found` );
        }

        return character;

    } catch ( error ) {
        throw new NotFoundError( `Character ${id} not found` );
    }
};

//#endregion

module.exports = { getCharacter };
