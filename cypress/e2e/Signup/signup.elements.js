export class SignupElements{
    static get textboxes(){
         
        return{
            
            get usuarioo(){
                return cy.get('input#sign-username')
            },

            get contrasena(){
                return cy.get('input#sign-password')
            }
         } 

    }

    static get buttons(){
               
        return{
            get close(){
                return cy.contains('button', 'Close').eq(1)
            },

            get signup(){
                return cy.contains('button', 'Sign up')
            }

        }

    } 
}