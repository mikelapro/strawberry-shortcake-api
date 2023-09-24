/**
 * Modelo para un character secundario de Strawberry Shortcake.
 * Ejemplo: Pets y relatives. 
 */
module.exports = class CharacterBase {
    name;
    gender;
    species;

    constructor( name, gender, species ) {
        this.name = name;
        this.gender = gender;
        this.species = species;
    }
};
