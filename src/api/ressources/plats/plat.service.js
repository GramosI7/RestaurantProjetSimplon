import validator from 'validator';
import isEmpty from "../../validation/is-empty"

export default {
    validateBody(body) {
        let errors = {};

        body.title = !isEmpty(body.title) ? body.title : "";
        body.body = !isEmpty(body.body) ? body.body : "";
        body.price = !isEmpty(body.price) ? body.price : "";
        body.typePlat = !isEmpty(body.typePlat) ? body.typePlat : "";
    
        if(!validator.isLength(body.title, { min : 2, max : 30 })){
            errors.title = "Votre title doit contenir entre 2 et 30 caracteres.";
        }
        if(validator.isEmpty(body.title)) {
            errors.title = "Un titre est requis.";
        }
        if(validator.isEmpty(body.typePlat)) {
            errors.typePlat = "Le type du plat est requis.";
        }
        if(validator.isEmpty(body.body)) {
            errors.body = "Une description du plat est requis.";
        }
        if(validator.isEmpty(body.price)) {
            errors.price = "Un prix est requis.";
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }
    },
};