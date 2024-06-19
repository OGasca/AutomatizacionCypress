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
        cy.wait(3000)
        this.inserUsuario(username)
        cy.wait(3000)
        this.insetPws(password)
        cy.wait(3000)
        this.clickOnLoginbutton()
    }



}