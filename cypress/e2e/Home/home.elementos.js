export class HomeElementos{
       static get categoriaMenu(){
          return{
            get phone(){
                return cy.contains('a', 'Phones')
            },

            get laptop(){
                return cy.contains('a', 'Laptops')
            },

            get monitor(){
                return cy.contains('a', 'Monitors')
            }



          }
       }

       //Genero esta clase con el parametro de nombre del producto que quiero seleccionar, 
       //en esta clase como lleva el parametro de nombreProducto no lleva el get
       static selectProducto(nombreProducto){
                return cy.contains('', nombreProducto)

       }


}// final