const app=require("./app")
app.listen(app.get("port"),function(){
    console.log("PETINCION RECIBIDA DEL CLIENTE");
})