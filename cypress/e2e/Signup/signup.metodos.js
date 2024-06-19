import { SignupElements } from "./signup.elements";

export class SignupMetodos{
        
    static insertUsuario(usuarioo){
            SignupElements.textboxes.usuarioo.invoke("val", usuarioo)
        }

    static InserContrasena(contrasena){
            SignupElements.textboxes.contrasena.invoke("val", contrasena)
    }

    static clickOnSignUpButton(){
           SignupElements.buttons.signup.click();
    }

    static signUp(usuarioo, contrasena){
           this.insertUsuario(usuarioo);
           this.InserContrasena(contrasena);
           this.clickOnSignUpButton();
    }

}