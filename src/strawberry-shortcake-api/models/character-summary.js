/**
 * Modelo para reprecentar la lista de nombres de los personajes y su id.
 */
module.exports = class CharacterSummary {
    _id;
    name;

    constructor( id,name ) {
        this._id = id;
        this.name = name;
    }
};