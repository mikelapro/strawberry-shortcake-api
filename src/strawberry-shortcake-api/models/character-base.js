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
