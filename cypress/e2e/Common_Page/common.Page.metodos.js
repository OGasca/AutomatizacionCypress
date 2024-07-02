import { CommonPageData } from "./common.Page.data";
import { CommonPageElementos } from "./common.Page.elemento";

export class CommonPageMetodos{

       static navegarEnMenus(){
        //Limpiar las cookies
        cy.clearAllCookies();
        // borrar el almacenamiento local (localStorage) del navegador antes de cada prueba
        cy.clearLocalStorage();  
        cy.visit(CommonPageData.url);
        CommonPageMetodos.clickMenuHome();
       }

       static clickMenuHome(){
        CommonPageElementos.topMenu.home.click();
       }

       static clickMenuContact(){
        CommonPageElementos.topMenu.contact.click();
       }

       static clickMenuAboutUs(){
        CommonPageElementos.topMenu.aboutUs.click();
       }


       static clickMenuCart(){
        CommonPageElementos.topMenu.cart.click();

        //Para controlar el error que no es propio de cypres es un error de la aplicación que se esta probando
        Cypress.on('uncaught:exception', (err, runnable)=>{
          return false
        }) 

       }



       static clickMenuLogin(){
        CommonPageElementos.topMenu.login.click();
       }

       static clickMenuSingUp(){
        CommonPageElementos.topMenu.signUp.click();
       }
       
       //Metodo para verificar alertas
       static verifyAlert(expecteMessage){

              cy.on('window:alert', (str) => {
              expect(str).to.equal(expecteMessage)
         });

       }

        //Genera un usuario aleatorio        
                                //longitud de 10 caracteres 
       static generaRandomString(length=10) {
              let result = '';
                                 //se ingresan los caracteres que se van a usar para generar la string random
              const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
              const charactersLength = characters.length;
              let counter = 0;
              while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
              }
              return result;
          }


        static verificaUserLogeado(username){
              CommonPageElementos.bienvenidoUsuario.should("have.text", `Welcome ${username}`);
    }



        static logout(){
          cy.get('body').then($body=>{
            //si encuentra el link de logout entonces da click en Logout
            if($body.find('#logout2[style="display: block;"]').length>0){
              CommonPageElementos.topMenu.logout.click({force: true});
            }              

          })

          
        }
          

}