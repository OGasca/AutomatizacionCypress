export class PlaceOrderElementos{
    
    static get textboxes(){
        return{
            get name(){
                return cy.get('input#name');
            },

            get country(){
                return cy.get('input#country'); 

            },
            
            get city(){
                return cy.get('input#city')
            },

            get creditcard(){
                 return cy.get('input#card')
            },

            get month(){
                 return cy.get('input#month')
            },

            get year(){
                return cy.get('input#year')
            },

           

        };
        
    }

     static get botones(){
       return{
            get close(){
                cy.get('div[id="orderModal"] button').eq(1);
            },

            get purchase(){
                cy.contains('button', 'Purchase');
            },

       };      

     }


}