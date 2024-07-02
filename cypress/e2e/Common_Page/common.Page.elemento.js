export class CommonPageElementos{
      static get topMenu(){
            return {
                get home(){
                    return cy.get('li.active a');
                },

                get contact(){
                    return cy.get('a[data-target="#exampleModal"]');
                },

                get aboutUs(){
                    return cy.get('a[data-target="#videoModal"]');
                },

                get cart(){
                    return cy.contains('a', 'Cart');
                },

                get login(){
                    return cy.get('a[data-target="#logInModal"]');
                },

                get signUp(){
                    return cy.get('a[data-target="#signInModal"]');
                },

                get logout(){
                    return cy.get('#logout2');
                },



            };

      }


      static get bienvenidoUsuario(){
            return cy.get('a#nameofuser')          

      }

}// final