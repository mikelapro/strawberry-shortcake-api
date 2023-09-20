//#region Imports

const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

const getCharacter = async ( id ) => {
    const character = await characterRepository.getById( id );

    return character;
};

//#endregion

module.exports = { getCharacter };
