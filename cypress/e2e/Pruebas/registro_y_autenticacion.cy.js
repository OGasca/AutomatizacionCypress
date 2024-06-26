import { CommonPageData } from "../Common_Page/common.Page.data"
import { CommonPageMetodos } from "../Common_Page/common.Page.metodos";
import { SignupMetodos } from "../Signup/signup.metodos";
import { Logger } from "../Utilitario/logger";

                                                           //los parentesis lo dejamos vacio para que tome los 10 caracteres
const usuarioAleatorio = CommonPageMetodos.generaRandomString();
                                                         //le mandamos 7 para que el pws se genere con solo 7 caracteres
const pwsAleatorio = CommonPageMetodos.generaRandomString(7)


describe(CommonPageData.testSuites.resgistroYAutenticacion, ()=>{
     
       it("Registro de usuario válido", ()=>{
              Logger.NumerodePaso(1)
              Logger.step('Navegar a la página de inicio.')
              CommonPageMetodos.navegarEnMenus();

              Logger.NumerodePaso(2)
              Logger.step('Hacer clic en "Sign Up" en la barra de navegción.') 
              CommonPageMetodos.clickMenuSingUp();

              Logger.NumerodePaso(3)
              Logger.step('Completar todos los campos obligatorios con informacion válida.') 
              SignupMetodos.insertUsuario(usuarioAleatorio)
              SignupMetodos.InserContrasena(pwsAleatorio)

              Logger.NumerodePaso(4)
              Logger.step('Hacer clic en "Sing up" para registrar el usuario.') 
              SignupMetodos.clickOnSignUpButton();
              cy.wait(6000)
              Logger.verificacion('Verificar que se muestre el mensaje "Sign up successful." ')
              SignupMetodos.verifySignupSuccesfulMessageIsDisplayed();

       });



});