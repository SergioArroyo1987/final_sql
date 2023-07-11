  class Book {
    
    constructor(titulo=string,tipo=string,autor=string,price=number,phot=string,id=0,id_u=0){
        this.id_book=id;
        this.id_user=id_u;
        this.title=titulo;
        this.type=tipo;
        this.author=autor;
        this.price=price;
        this.photo=phot;

    }
}
module.exports=Book;

