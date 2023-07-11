const { json } = require("express");
const Book=require("../models/book.js")

let libro=Book;
let libros=[];
libros[0]=new libro("Segio","terror","Sergio Arroyo",2,"https://th.bing.com/th/id/R.19e54647fbe2fb4da41904129454b488?rik=nsJy02lnmw70Dw&pid=ImgRaw&r=0",1,1);
function getbook(Book,response){
response.json(libros);
}
function postbook(Book,response){
    
    if(libros.push(Book.body)){
        response.send(true);
    }else{
        response.send(false)
    };
    
   
}
function putbook(request,response){
    
    let comprobar=request.body.id_book;
    for(a=0;a<libros.length;a++){
        if(libros[a].id_book==comprobar){
            let nuevo=new Book(request.body.title,request.body.type,request.body.author,request.body.price,request.body.photo,request.body.id_book,request.body.id_user);
            libros[a]=nuevo;
            
            
        }
    }
    response.send({error:false,message:"String modificado"});
}
function delbook(request,response){
    let comprobar=request.body.id_book;
    console.log(comprobar);
    for(a=0;a<libros.length;a++){
        console.log(a);
        console.log(libros.length);
        console.log(libros[a].id_book);
        if(libros[a].id_book==comprobar){
            console.log("Entra");
            libros.splice(a,1);
        
            
            
        }
        
    }
    response.send(true);

}
module.exports={getbook,postbook,putbook,delbook};