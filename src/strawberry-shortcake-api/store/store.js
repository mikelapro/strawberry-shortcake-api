// Contiene las funciones de escritura/lectura del estado de la app/api (los datos en memoria).

/*
Analogía
~~~~~~~~
En lugar de tener toda la ropa amontonada y mezclada en el medio del cuarto, la guardamos
en un placard, el placar tiene dentro un unterior de placar que define los sectores, estantes 
y cajones y cada y en cada uno de estos se guarda la ropa.
Pero hay una regla!, le prestas la ropa a tu hermana pero se la das vos, es decir, tu hermana 
no tiene acceso directo a la ropa, te la pide a vos y vos se la das y la guardas (no le dejas 
tocar el placard).
*/

// store.js = Placard.

// state = Interior del placard.
const state = {
    // Propiedades = Sectores/estantes/cajones del placard (array de abrigos).
    characters: []
};

// TODO: No exportar el state, hacer funciones de acceso.
module.exports = {
    state
};
