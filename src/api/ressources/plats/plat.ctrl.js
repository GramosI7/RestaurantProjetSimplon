import Plat from "./plat.model";
import PlatServices from "./plat.service";

export default {
    async create(req, res) {
        try {
            const { errors, isValid }= PlatServices.validateBody(req.body);
            if (!isValid) {
              return res.status(400).json(errors);
          }
            const plat = await Plat.create({
              title : req.body.title,
              body : req.body.body,
              price: req.body.price
            })
            return res.json(plat);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    }, 
    async findAll(req, res){
        try {
            const plat = await Plat.find({})
            if(!plat){
              return res.status(404).json({err: 'could not find the plat'})
            }
            return res.json(plat)
          } catch(err){
            console.error(err)
            return res.status(500).send(err)
            }
    },
    async findOne(req, res){
        try{
          const { id } = req.params
          const plat = await Plat.findById(id);
          if(!plat){
            return res.status(404).json({err:'could not find this plat'})
          }
          return res.json(plat)
        }catch (err){
          console.error(err)
          return res.status(500).send(err)
        }
      },
      async update(req, res){
        try {
          const { id } = req.params;
          const { errors, isValid }= PlatServices.validateBody(req.body);
            if (!isValid) {
              return res.status(400).json(errors);
          }
          const plat = await Plat.findOneAndUpdate({_id: id}, req.body, {new: true})
          if(!plat){
            return res.status(404).json({err: 'could not find the plat'})
          }
          return res.json(plat)
        } catch(err){
          console.error(err)
          return res.status(500).send(err)
        }
      },
      async delete(req, res){
        try {
          const { id } = req.params
          const plat = await Plat.findOneAndRemove({_id:id})
          if(!plat){
            return res.status(404).json({err: 'could not find the plat'})
          }
          return res.json(plat)
        } catch(err){
          console.error(err)
          return res.status(500).send(err)
          }
      }
}