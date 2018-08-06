import isEmpty from "../../validation/is-empty";
import Validator from "validator";


export default {
    validateProfileInput(data) {
        let errors = {};

        data.prenom = !isEmpty(data.prenom) ? data.prenom : '';
        data.nom = !isEmpty(data.nom) ? data.nom : '';
        data.phone = !isEmpty(data.phone) ? data.phone : '';
        data.region = !isEmpty(data.region) ? data.region : '';
        data.ville = !isEmpty(data.ville) ? data.ville : '';
        data.codePostal = !isEmpty(data.codePostal) ? data.codePostal : '';
        data.rue = !isEmpty(data.rue) ? data.rue : '';

        if (Validator.isEmpty(data.prenom)) {
            errors.prenom = 'Profil prénom is required';
        }
        if (Validator.isEmpty(data.nom)) {
            errors.nom = 'Profile nom is required';
        }
        if (Validator.isEmpty(data.phone)) {
            errors.phone = 'Profile phone is required';
        }
        if (Validator.isEmpty(data.region)) {
            errors.region = 'Profile region is required';
        }
        if (Validator.isEmpty(data.ville)) {
            errors.ville = 'Profile ville is required';
        }
        if (Validator.isEmpty(data.codePostal)) {
            errors.codePostal = 'Profile codePostal is required';
        }
        if (Validator.isEmpty(data.rue)) {
            errors.rue = 'Profile rue is required';
        }
        
        
        return {
            errors,
            isValid: isEmpty(errors)
        };
    }
};