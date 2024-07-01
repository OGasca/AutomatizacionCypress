import { CarritoElementos } from "./carrito.elementos";

export class carritoMetodos{

    //busca el elemento del carrito para borrar
    static clickDelete(nombreProducto){
        //elemento del carrito y en el link para borrar le da click
        CarritoElementos.links.delete(nombreProducto).click();
    }

     
    static verificaProductoAgregadoAlCarrito(nombreProducto){
        CarritoElementos.links.delete(nombreProducto).should('be.visible')
    } 



    static verificaMuetraPaginaCarritoPorLaURL(){
        //para validar que se encuentra la página por la URL
         cy.url().should('include', 'cart.html')

    }


    static clickEnBotonPleceOrder(){
        CarritoElementos.buton.placeOrder.click();

    }

}