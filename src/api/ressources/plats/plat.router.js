import express from 'express';
import platCtrl from './plat.ctrl';
import passport from "passport";

export const platRouter = express.Router()

platRouter.route("/")
  .post(passport.authenticate("jwt", {session:false}), platCtrl.create)
  .get(platCtrl.findAll)

platRouter.route("/:id")
  .get(platCtrl.findOne)
  .put(passport.authenticate("jwt", {session:false}),platCtrl.update)
  .delete(passport.authenticate("jwt", {session:false}),platCtrl.delete)