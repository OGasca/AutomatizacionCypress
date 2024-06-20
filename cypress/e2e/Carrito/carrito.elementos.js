export class CarritoElementos{
    
    static get buton(){
        return{
                //se crea el metodo para el boton "PleaceOrder"
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]');                       
            },

        };
    }

    //Se crea el metodo para el link del delete que se muestra en cada producto.
    static get links(){
        return{
             delete(nombreProducto){

                //busca un td que contenga el nombre del producto, para pedir que se mueva al ancestro se usa el metodo closest. y con el find se busca el desendente 
                //esto es de acuerdo al xpath siguiente //td[text() = 'Samsung galaxy s6'  ]/ancestor::tr//a
                return cy.contains('td', nombreProducto).closest('tr').find('a');

            }
        }
    }




}// final