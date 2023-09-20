//#region Imports

// Maneja la conexión a la base de datos.
const mongoose = require( 'mongoose' );
require( 'dotenv' ).config();

//#endregion

//#region Methods

const connect = async () => {
    try {
        const con = await mongoose.connect( process.env.MONGO_URI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true
        } );
        console.log( `MongoDB connected - host: ${con.connection.host}` );
    } catch ( err ) {
        console.log( `MongoDB connection fail: ${err}` );
        process.exit( 1 );
    }
};

//#endregion

module.exports = { connect };
