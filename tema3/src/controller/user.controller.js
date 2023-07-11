const {conexion}=require("../database/database");
const { use } = require("../routers/user.routers");

let usuario=null;

function getStart(request,response){
    response.send("Peticion recibida")
}
function getUser(request,response){
    console.log(request.headers);
    console.log(request.url);
    console.log(request.method);
    response.status(200).json({message:"ok: true, message: ‘Recibido!’"});
}
function getBye(request,response){
    response.status(200).json({message:"ok: true, message: ‘Adios’"});
}
async function postusuario(request,response){
    console.log(request.body);
    try{
        let sql="INSERT INTO appbooks.user (name,last_name,email,photo,password)"+"VALUES ('"+request.body.name+"','"+request.body.last_name+"','"+request.body.email+"','"+request.body.photo+"','"+request.body.password+"')" ; 
        console.log(sql);
    let [resultado]=await conexion.query(sql);
    console.log(resultado);
    response.send(resultado);
}
    catch(error){
        response.send(error);   
    }

    
}
async function postlogueado(request,response){
    
    try{
        let sql="SELECT *  FROM appbooks.user"+" WHERE name=('"+request.body[0]+"') AND email=('"+request.body[1]+"');"
        
    let [resultado]=await conexion.query(sql);
    
    
    response.send(resultado);
}
    catch(error){
        response.send(false);   
    }
}
async function putusuario(request,response){
    console.log(request.body);
    
    
    let sql="UPDATE user SET name=('"+request.body.name+"'),last_name=('"+request.body.last_name+"'),email=('"+request.body.email+"'),photo=('"+request.body.photo+"'),password=('"+request.body.password+"') WHERE id_user=('"+request.params.id_user+"')";
     let [resultado] =await conexion.query(sql) ; 
     if(resultado){
        response.send(true);
     }else{
        response.send(false);
     }
        
    
}

module.exports={getUser,getBye,postusuario,postlogueado,putusuario};