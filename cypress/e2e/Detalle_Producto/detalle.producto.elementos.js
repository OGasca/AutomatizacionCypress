export class DetalleProductoElemento{
    
    static get buttons(){
        return{
            get agregarCarrito(){
                return cy.contains('a', 'Add to cart');
            },
        };
    }
}