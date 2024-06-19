export class LoginElementos{

      //Se genera la clase para las cajas de texto
      static get textboxes() {
        return{
            get usuario(){
                return cy.get("input#loginusername");
                
            },

            get password(){
                return cy.get("input#loginpassword")

            },
              
        };
      }
      
      //Se genera la clase para los botones
      static get buttonsLogin(){
           return{
            get btocloselogin(){
                return cy.get("#logInModal > div > div > div.modal-footer > button.btn.btn-secondary")
                
            },

            get btologin(){
                //return cy.contains('button', 'Log in')
                return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
                       
            }

           }

      }

}//final