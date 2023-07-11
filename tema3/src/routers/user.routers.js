const {Router}=require("express");
const router=Router();
const usersCtrl=require("../controller/user.controller");


router.get("/usuario",usersCtrl.getUser);
router.post("/usuario",usersCtrl.postusuario);
router.post("/login",usersCtrl.postlogueado);
router.put("/usuario/:id_user",usersCtrl.putusuario)
router.get("/bye",usersCtrl.getBye);





module.exports=router;