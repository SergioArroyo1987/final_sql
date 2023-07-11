const {Router}=require("express");
const router=Router();

const libroCtrl=require("../controller/libro.controller");
router.get("/libro/:id_user",libroCtrl.getlibro);
router.get("/libro1/:id_user/:id_book",libroCtrl.getuno)
router.post("/libro",libroCtrl.postlibro);
router.put("/libro",libroCtrl.putlibro);
router.delete("/libro",libroCtrl.dellibro);
module.exports=router;