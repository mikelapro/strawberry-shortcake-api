//#region Imports

const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

const deleteCharacter = async ( id ) => {
    await characterRepository.remove( id );
}

//#endregion

module.exports = { deleteCharacter }
