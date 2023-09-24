//#region Imports

const NotFoundError = require( '../errors/NotFoundError.js' );
const CharacterBase = require( '../models/character-base.js' );
const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

/**
 * Actualiza el character correspondiente al id especificado con los datos del character 
 * recibido (excepto el id).
 * @param {String} id Identificador del character a modificar.
 * @param {Character} character Datos para tomar las modificaciones.
 * @throws {NotFoundError} Error personalizado para lanzar cuando no se encuentre un character.
 * @returns El character actualizado.
 */
const updateCharacter = async ( id, character ) => {
    // Obtiene el character actual de la base de datos.
    const actualCharacter = await characterRepository.getById( id );

    if ( actualCharacter == undefined || actualCharacter == null ) {
        throw new NotFoundError( `Character ${id} not found` );
    }

    actualCharacter.name = character.name;
    actualCharacter.season = character.season;
    actualCharacter.nickName = character.nickName;
    actualCharacter.age = character.age;
    actualCharacter.gender = character.gender;
    // actualCharacter.relatives = character.relatives;
    actualCharacter.theme = character.theme;
    actualCharacter.occupation = character.occupation;
    actualCharacter.hairColor = character.hairColor;
    actualCharacter.eyeColor = character.eyeColor;
    actualCharacter.picture = character.picture;
    actualCharacter.goal = character.goal;
    // actualCharacter.like = character.like;
    // actualCharacter.disLike = character.disLike; 
    // actualCharacter.friends = character.friends;
    // actualCharacter.enemies = character.enemies;
    actualCharacter.geneation = character.geneation;
    // actualCharacter.pets = character.pets;
    actualCharacter.personality = character.personality;
    actualCharacter.appearance = character.appearance;
    actualCharacter.voiceActor = character.voiceActor;
    actualCharacter.summary = character.summary;
    actualCharacter.species = character.species;
    actualCharacter.source = character.source;

    // Relatives.
    if ( Array.isArray( character.relatives ) ) {
        actualCharacter.relatives = [];
        character.relatives.forEach( ( relative ) => {
            const newRelative = new CharacterBase( relative.name, relative.gender, relative.species );
            actualCharacter.relatives.push( newRelative );
        } );
    } else {
        actualCharacter.relatives = null;
    }

    // Likes.
    if ( Array.isArray( character.like ) ) {
        actualCharacter.like = [];
        character.like.forEach( ( like ) => {
            actualCharacter.like.push( like );
        } );
    } else {
        actualCharacter.like = null;
    }

    // Dislikes.
    if ( Array.isArray( character.disLike ) ) {
        actualCharacter.disLike = [];
        character.disLike.forEach( ( disLike ) => {
            actualCharacter.disLike.push( disLike );
        } );
    } else {
        actualCharacter.disLike = null;
    }

    // Friends.
    if ( Array.isArray( character.friends ) ) {
        actualCharacter.friends = [];
        character.friends.forEach( ( friend ) => {
            const newFriend = new CharacterBase( friend.name, friend.gender, friend.species );
            actualCharacter.friends.push( newFriend );
        } );
    } else {
        actualCharacter.friends = null;
    }

    // Enemies.
    if ( Array.isArray( character.enemies ) ) {
        actualCharacter.enemies = [];
        character.enemies.forEach( ( enemy ) => {
            const newEnemy = new CharacterBase( enemy.name, enemy.gender, enemy.species );
            actualCharacter.enemies.push( newEnemy );
        } );
    } else {
        actualCharacter.enemies = null;
    }

    // Pets.
    if ( Array.isArray( character.pets ) ) {
        actualCharacter.pets = [];
        character.pets.forEach( ( pet ) => {
            const newPet = new CharacterBase( pet.name, pet.gender, pet.species );
            actualCharacter.pets.push( newPet );
        } );
    } else {
        actualCharacter.pets = null;
    }

    // Actualiza el character en la base de datos.
    const updatedCharacter = await characterRepository.update( actualCharacter );

    return updatedCharacter;
};

//#endregion

module.exports = {
    updateCharacter
};
