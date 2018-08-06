import express from "express"
import { userRouter } from "./ressources/user";
import { platRouter } from "./ressources/plats";
import { profilRouter } from "./ressources/profil";


export const restRouter = express.Router();

restRouter.use("/user", userRouter)
restRouter.use("/plat", platRouter)
restRouter.use("/profil", profilRouter)



