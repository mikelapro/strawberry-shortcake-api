const Character = require( '../models/character.js' );
const state = require( '../store/store.js' );

const inicializarCharacters = () => {
  state.characters = [];
}

module.exports = { inicializarCharacters }
