import mongoose from 'mongoose'
import moment from 'moment';
const { Schema } = mongoose;

const platSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    price: {
        type: String, 
        required: true
    },

    typePlat: {
        type: String, 
        required: true
    },

    picture: {
        type: String,
        // required: true
    },

    date:{
        type: String,
        default: moment().format("Do MMMM YYYY")
    },
    
    body: {
        type: String
    }

})

export default mongoose.model('plats', platSchema)