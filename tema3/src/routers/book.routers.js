const {Router}=require("express");
const router=Router();

const libroCtrl=require("../controller/book.controller");
router.get("/book",libroCtrl.getbook);
router.post("/book",libroCtrl.postbook);
router.put("/book",libroCtrl.putbook);
router.delete("/book",libroCtrl.delbook);
module.exports=router;