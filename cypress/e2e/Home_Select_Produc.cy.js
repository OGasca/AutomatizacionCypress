
import { HomeMetodos } from "./Home/home.metodos" //Se importa la clase 
import { HomeData } from "./Home/home.data"




describe('Seleccion de producto', () => {
  

it('Seleccionamos un producto', ()=>{
  cy.viewport(1400, 1100)
  
  //Ingresa a la página web
  cy.visit('https://demoblaze.com/index.html')
  
  
  HomeMetodos.clickEnProducto(HomeData.productos.Samsunggalaxys6)
  
  cy.wait(5000)
  
  
 



})




})//final