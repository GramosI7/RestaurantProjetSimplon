import express from 'express';
import platCtrl from './plat.ctrl';
import passport from "passport";
import multer from "multer";

export const platRouter = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname )
  }
});

var upload = multer({ storage: storage });

platRouter.route("/")
  .post(upload.single("picture"), platCtrl.create)
  .get(platCtrl.findAll)

platRouter.route("/:id")
  .get(platCtrl.findOne)
  .put(passport.authenticate("jwt", {session:false}), platCtrl.update)
  .delete(passport.authenticate("jwt", {session:false}), platCtrl.delete)