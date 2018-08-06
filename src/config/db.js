import mongoose from "mongoose"
const { DBUrl } = process.env

mongoose.connect(DBUrl, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connecté a MongoDB !')
});

mongoose.Promise = global.Promise
export const connect = () => mongoose.connect(DBUrl, { useNewUrlParser: true })
