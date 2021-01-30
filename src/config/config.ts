/* Entorno */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/* Base de datos */
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:3000/Dico';
    // urlDB = 'mongodb+srv://chemadb:Mechemix.1@cluster0.xxx6p.azure.mongodb.net/draco?retryWrites=true&w=majority';
} else {
    // urlDB = process.env.MONGO_URI;
    urlDB = 'mongodb+srv://chema:Chemaesmipastor.1@cluster0.pcdwu.mongodb.net/Dico>?retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;
