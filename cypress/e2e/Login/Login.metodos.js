import { CommonPageMetodos } from "../Common_Page/common.Page.metodos";
import { Logger } from "../Utilitario/logger";
import { LoginElementos } from "./Login.elementos";

export class LoginMetod{
    //metodos individuales  
    static inserUsuario(usuario){
          LoginElementos.textboxes.usuario.invoke("val", usuario)
    }

    static insetPws(password){
          LoginElementos.textboxes.password.invoke("val", password)
    }

    static clickOnLoginbutton(){
          LoginElementos.buttonsLogin.btologin.click({force:true})

    }

    // Se crea este método donde estan el usuario el pws y el click juntos para que solo al llamar al metodo haga los 3 pasos
    static login(username, password){
        
        Logger.subStep('Insertar usuario')
        
        this.inserUsuario(username)

        Logger.subStep('Insertar pws')
        
        this.insetPws(password)

        Logger.subStep('Click en boton login')
        cy.wait(2000)
        this.clickOnLoginbutton()
    }



     static verificaMensajePwsErroneo(){
       
         CommonPageMetodos.verifyAlert('Wrong password.')

     }










}