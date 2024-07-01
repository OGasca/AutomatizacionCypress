import { HomeElementos } from './home.elementos';


export class HomeMetodos{

     static clickenOpcionPhone(){
        HomeElementos.categoriaMenu.phone.click();
     }

     static clickOpcionLaptop(){
        HomeElementos.categoriaMenu.laptop.click();
     }

     static clickOpcionMonitor(){
        HomeElementos.categoriaMenu.monitor.click();
     }

     static clickEnProducto(nombreProducto){
        HomeElementos.selectProducto(nombreProducto).click()
     }

     //Verifica que un producto se este mostrando que este visible
     static verifyProductosMostrados(nombreProducto){
         HomeElementos.selectProducto(nombreProducto).should('be.visible')
     }

     static verificaMuetraPaginaHomePorLaURL(){
      //para validar que se encuentra la página por la URL
       cy.url().should('include', 'index.html')

  }


     


}//final