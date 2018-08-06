import mongoose from 'mongoose';
import moment from 'moment';

const {Schema} = mongoose;

const profilSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    prenom: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
    phone: {
        type: String, 
        required: true
    },
    region: {
        type: String, 
        required: true
    },
    ville : {
        type: String,
        required: true
    },
    codePostal: {
        type: String, 
        required: true
    },
    rue: {
        type: String, 
        required: true
    },
    date: {
        type: String,
        default: moment().format("Do MMMM YYYY")
    }

})

export default mongoose.model('profils', profilSchema)