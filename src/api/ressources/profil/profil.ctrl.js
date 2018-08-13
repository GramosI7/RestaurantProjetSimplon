import Profil from "./profil.model";
import User from "../user/user.model";
import ArticleService from "./profil.service";

export default {
    async findOneMe(req, res){
        try{
          const profil = await Profil.findOne({user: req.user.id})
          .populate("user", ["pseudo", "email", "avatar"])
            if(!profil){
                return res.status(404).json({err:'You do not have to create your profile.'})
            }
          return res.json(profil)
        }catch (err){
          console.error(err)
          return res.status(500).send(err)
        }
      },
      async findAll(req, res){
        try{
          const profil = await Profil.find({})
          .populate('user', ['pseudo', "email", 'avatar']);
          if(!profil){
            return res.status(404).json({err:'could not find this a user'})
          }
          return res.json(profil)
        }catch (err){
          console.error(err)
          return res.status(500).send(err)
        }
      },
      async create(req, res) {
          try {
            const { errors, isValid } = ArticleService.validateProfileInput(req.body);
            if (!isValid) {
                return res.status(400).json(errors);
              }
            const profileFields = {};
            profileFields.user = req.user.id;
            if (req.body.prenom) profileFields.prenom = req.body.prenom;
            if (req.body.nom) profileFields.nom = req.body.nom;
            if (req.body.phone) profileFields.phone = req.body.phone;
            if (req.body.region) profileFields.region = req.body.region;
            if (req.body.ville) profileFields.ville = req.body.ville;
            if (req.body.codePostal) profileFields.codePostal = req.body.codePostal;
            if (req.body.rue) profileFields.rue = req.body.rue;

            Profil.findOne({ user: req.user.id }).then(profil => {
                if (profil) {
                  // Update
                  Profil.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                  ).then(profil => res.json(profil));
                } else {
                  // Create
                  // Check if nom exists
                  Profil.findOne({ nom: profileFields.nom }).then(profil => {
                    if (profil) {
                      errors.lastName = 'That nom already exists';
                      res.status(400).json(errors);
                    }
                    // Save Profil
                    new Profil(profileFields).save().then(profil => res.json(profil));
                  });
                }
            })
        } catch (err){
            console.error(err)
            return res.status(500).send(err)
          }
    },
    async delete(req, res){
      try{
        Profil.findOneAndRemove({user: req.user.id})
          .then(() => {
            User.findOneAndRemove({_id: req.user.id})
              .then(() => {
                res.json({success: true})
              })
          })
      } catch (err){
          console.error(err)
          return res.status(500).send(err)
      }
    }
}