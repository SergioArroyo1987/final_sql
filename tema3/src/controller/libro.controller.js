const Book=require("../models/book.js")
const {conexion}=require("../database/database");
let libro=Book;


async function getlibro(request,response){
    console.log("holaaa");

    try{
        let sql="SELECT id_book,title,type,author,price,book.photo FROM book INNER JOIN user ON (book.id_user=user.id_user) WHERE user.id_user='"+(request.params.id_user)+"';"
        
        let [resultado]=await conexion.query(sql);
        console.log(resultado);
        response.send(resultado);
    }catch(error) {
        response.send(error);
    } 
}
async function postlibro(request,response){
    console.log(request.body);
    let sql="INSERT INTO appbooks.book (title,author,type,price,photo,id_user)"+"VALUES('"+request.body.title+"','"+request.body.type+"','"+request.body.author+"','"+request.body.price+"','"+request.body.photo+"','"+request.body.id_user+"')" ;
    let[resultado]=await conexion.query(sql);
    if(resultado){
        response.send(true);
    }else{
        response.send(false)
    };
   
}
async function putlibro(request,response){
    console.log(request.body);
    
    let sql="UPDATE book SET title=('"+request.body.title+"'),author=('"+request.body.author+"'),type=('"+request.body.type+"'),price=('"+request.body.price+"'),photo=('"+request.body.photo+"') WHERE id_book=('"+request.body.id_book+"')";
     let [resultado] =await conexion.query(sql) ; 
     if(resultado){
        response.send(true);
     }else{
        response.send(false);
     }
        
    
}
async function dellibro(request,response){
    let comprobar=request.body.id_book;
    console.log(comprobar);
    try{
   let sql="DELETE FROM book WHERE id_book="+comprobar;
   console.log(sql);
       let [resultado]=await conexion.query(sql);
       response.send(resultado);
        }
       catch(error){
        response.send(error);
       }
    }
    async function getuno(request,response){
        
    
        try{
            let sql="SELECT * FROM book"+" INNER JOIN user ON (book.id_user=user.id_user)"+" WHERE user.id_user=('"+request.params.id_user+"')"+"AND book.id_book=('"+request.params.id_book+"');"
            console.log(sql);
            let [resultado]=await conexion.query(sql);
            console.log(resultado);
            response.send(resultado);
        }catch(error) {
            response.send(error);
        } 
    }


module.exports={getlibro,postlibro,putlibro,dellibro,getuno};