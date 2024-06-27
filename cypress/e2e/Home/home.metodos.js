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


     


}//final