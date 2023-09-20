//#region Imports

const state = require( '../store/store.js' );

//#endregion

//#region Usecase

const inicializarCharacters = () => {
    state.characters = [];
};

//#endregion

module.exports = { inicializarCharacters };
