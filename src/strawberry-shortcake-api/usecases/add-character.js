const Character = require( '../models/character.js' );
const CharacterBase = require( '../models/character-base.js' );
// const state = require( '../store/store.js' );
const characterRepository = require( '../repositories/character.repository.js' );

const addCharacter = ( character ) => {

    // let newId;
    // if( state.characters == undefined ) {
    //     newId = 1;
    //     state.characters = [];
    // } else {
    //     newId = state.characters.length + 1;
    // }

    const newCharacter = new Character();

    //newCharacter.id = newId; //* NOTE: Ahora el id lo maneja Mongo.
    newCharacter.season = character.season;
    newCharacter.name = character.name;
    newCharacter.nickName = character.nickName;
    newCharacter.age = character.age;
    newCharacter.gender = character.gender;
    // newCharacter.relatives = character.relatives;
    newCharacter.theme = character.theme;
    newCharacter.occupation = character.occupation;
    newCharacter.hairColor = character.hairColor;
    newCharacter.eyeColor = character.eyeColor;
    newCharacter.picture = character.picture;
    newCharacter.goal = character.goal;
    // newCharacter.like = character.like;
    // newCharacter.disLike = character.disLike; 
    // newCharacter.friends = character.friends;
    // newCharacter.enemies = character.enemies;
    newCharacter.geneation = character.geneation;
    // newCharacter.pets = character.pets;
    newCharacter.personality = character.personality;
    newCharacter.appearance = character.appearance;
    newCharacter.voiceActor = character.voiceActor;
    newCharacter.summary = character.summary;
    newCharacter.species = character.species;

    // Relatives.
    if ( Array.isArray( character.relatives ) ) {

        newCharacter.relatives = [];
        character.relatives.forEach( ( relative ) => {
            const newRelative = new CharacterBase( relative.name, relative.gender, relative.species );
            newCharacter.relatives.push( newRelative );
        } );
    } else {
        newCharacter.relatives = null;
    }

    // Likes.
    if ( Array.isArray( character.like ) ) {
        newCharacter.like = [];
        character.like.forEach( ( like ) => {
            newCharacter.like.push( like );
        } );
    } else {
        newCharacter.like = null;
    }

    // Dislikes.
    if ( Array.isArray( character.disLike ) ) {
        newCharacter.disLike = [];
        character.disLike.forEach( ( disLike ) => {
            newCharacter.disLike.push( disLike );
        } );
    } else {
        newCharacter.disLike = null;
    }

    // Friends.
    if ( Array.isArray( character.friends ) ) {
        newCharacter.friends = [];
        character.friends.forEach( ( friend ) => {
            const newfriend = new CharacterBase( friend.name, friend.gender, friend.species );
            newCharacter.friends.push( newfriend );
        } );
    } else {
        newCharacter.friends = null;
    }

    // Enemies.
    if ( Array.isArray( character.enemies ) ) {
        newCharacter.enemies = [];
        character.enemies.forEach( ( enemy ) => {
            const newEnemy = new CharacterBase( enemy.name, enemy.gender, enemy.species );
            newCharacter.enemies.push( newEnemy );
        } );
    } else {
        newCharacter.enemies = null;
    }

    // Pets.
    if ( Array.isArray( character.pets ) ) {
        newCharacter.pets = [];
        character.pets.forEach( ( pet ) => {
            const newPet = new CharacterBase( pet.name, pet.gender, pet.species );
            newCharacter.pets.push( newPet );
        } );
    } else {
        newCharacter.pets = null;
    }

    // Agrega el nuevo character al state.
    //state.characters.push( newCharacter );

    // Agrega el nuevo character en la base de datos.
    characterRepository.create( newCharacter );

    // Response.
    return newCharacter;
}

module.exports = { addCharacter }
