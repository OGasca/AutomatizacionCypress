import { CommonPageData } from "./common.Page.data";
import { CommonPageElementos } from "./common.Page.elemento";

export class CommonPageMetodos{

       static navegarEnMenus(){
        cy.clearCookies();      
        cy.visit(CommonPageData.url);
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
          

}