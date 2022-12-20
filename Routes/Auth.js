import express from "express"
// import { router } from "json-server";
import { register ,login } from "../Controllers/authController.js";
const router = express.Router();

// router.get("/a",(req,res)=>{
//     res.send({message:"bhakk madarachod"})
// })
// router.post("")
router.post("/register",register);
router.post("/login",login)

export default router