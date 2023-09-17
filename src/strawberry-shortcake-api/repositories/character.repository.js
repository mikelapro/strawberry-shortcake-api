// Repository: Es la capa que controla la persistencia de datos en una base de datos.

//#region Imports

const mongoose = require( 'mongoose' );

const dataModelName = 'Character'; // Nombre del modelo de base de datos.
const collectionName = 'characters'; // Nombre de la collection de la base de datos (igual al que está en la base de datos).
const schema = new mongoose.Schema( {}, { strict: false, versionKey: false } ); // Mongoose Schema (sin schema, libre!).
const DataModel = mongoose.model( dataModelName, schema, collectionName ); // Mongoose model (da operaciones de la base de datos).

//#endregion

//#region Methods

const create = async ( character ) => {
    const characterCreatedDoc = await DataModel.create( character );

    // Convierte a POJOS.
    // https://mongoosejs.com/docs/api/document.html#Document.prototype.toObject().
    const characterCreated = characterCreatedDoc.toObject();
    return characterCreated;
}

const getById = async ( id ) => {
    const character = await DataModel.findById( id ).lean().exec();
    return character;
}

const getAll = async ( query ) => {
    const characters = await DataModel.find( query ).lean().exec(); // .limit(15)
    return characters;

    // NOTE: .lean converts document to POJO (have el .toObject()).
    //const characterDocs = await DataModel.find( query ).exec(); 
    //var characters = characterDocs.map( ( model ) => model.toObject() );
}

const update = async ( character ) => {
    const characterUpdated = await DataModel.findByIdAndUpdate( { _id: character._id }, character, { new: true } ).lean().exec();
    return characterUpdated;
}

const remove = async ( id ) => {
    await DataModel.findByIdAndRemove( { _id: id } ).exec();
}

//#endregion

module.exports = {
    create,
    getById,
    getAll,
    update,
    remove
}
