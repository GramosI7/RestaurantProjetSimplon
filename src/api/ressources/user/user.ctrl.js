import userService from './user.service';
import User from './user.model';
import jwt from '../../helpers/jwt';
import gravatar from "gravatar";


export default {
    async signup(req, res) {
        try {
            const { errors, isValid }= userService.validateSignup(req.body);

            if (!isValid) {
                return res.status(400).json(errors);
            }
            const encryptedPass = userService.encryptPassword(req.body.password);
            const avatar = gravatar.url(req.body.email, {
                s: "200",
                r: "pg", 
                d: "mm" 
            });
            
            const user = await User.findOne({email: req.body.email})
            if(user) {
                return res.json({email : "L'email existe deja"})
            } else {
                const userRegister = await User.create({
                    pseudo: req.body.pseudo,
                    email: req.body.email,
                    avatar: avatar,
                    password: encryptedPass
                });
                return res.json(userRegister);
            }
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        return res.json(req.body);
    },

    async login(req, res) {
        try{
            const { errors, isValid } = userService.validateLogin(req.body);
            if(!isValid) {
                return res.status(400).json(errors);
            }
            const user = await User.findOne({ email: req.body.email});
            if (!user) {
                return res.status(401).json({email: "Utilisateur non trouvé"});
            }
            const authenticated = userService.comparePassword(
                req.body.password,
                user.password
            );
            if (!authenticated) {
                return res.status(401).json({password: "Mauvais mot de passe"}); 
            }
            const token = jwt.issue({ 
                id: user._id,
                pseudo: user.pseudo,
                email: user.email,
                avatar: user.avatar
            }, '1d')
            return res.json({token});
         } catch (err){
             console.error(err);
             return res.status(500).send(err);
         }
    },

    authenticate(req,res) {
        return res.json(req.user);
    },
};
