import { CommonPageMetodos } from "../Common_Page/common.Page.metodos";
import { LoginMetod } from "../Login/Login.metodos";
import { Logger } from "../Utilitario/logger";
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

    static borrarProductos(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
           link.click()
           cy.wait(1000) 
        })
    }


    static limpiarCarrito(nombreUsuario, pws){
         Logger.subStep('Navegar a la página')
         CommonPageMetodos.navegarEnMenus();
         Logger.subStep('Click en log out')
         CommonPageMetodos.logout();
         Logger.subStep('Click en el Home')
         CommonPageMetodos.clickMenuHome();
         Logger.subStep('Click en el menu Log in')
         CommonPageMetodos.clickMenuLogin();
         Logger.subStep('Ingresamos Usuario y pws')
         LoginMetod.login(nombreUsuario, pws)
         Logger.subStep('Click en el Cart')
         CommonPageMetodos.clickMenuCart()
         Logger.subStep('Borramos lo que hay en el carrito')
         this.borrarProductos();

    }

}