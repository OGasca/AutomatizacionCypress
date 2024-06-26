import { CommonPageData } from "../Common_Page/common.Page.data"
import { CommonPageMetodos } from "../Common_Page/common.Page.metodos";
import { LoginData } from "../Login/Login.data";
import { SignupMetodos } from "../Signup/signup.metodos";
import { Logger } from "../Utilitario/logger";

                                                           //los parentesis lo dejamos vacio para que tome los 10 caracteres
const usuarioAleatorio = CommonPageMetodos.generaRandomString();
                                                         //le mandamos 7 para que el pws se genere con solo 7 caracteres
const pwsAleatorio = CommonPageMetodos.generaRandomString(7)
const usuarioExistente = LoginData.UsuarioValido.usuariovalido 

describe(CommonPageData.testSuites.registro, ()=>{
     
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




       it("Registro de usuario Inválido", ()=>{
              Logger.NumerodePaso(1)
              Logger.step('Navegar a la página de inicio.')
              CommonPageMetodos.navegarEnMenus();

              Logger.NumerodePaso(2)
              Logger.step('Hacer clic en "Sign Up" en la barra de navegción.') 
              CommonPageMetodos.clickMenuSingUp();

              Logger.NumerodePaso(3)
              Logger.step('Completar todos los campos obligatorios con informacion Inválida.') 
              SignupMetodos.insertUsuario(usuarioExistente)
              SignupMetodos.InserContrasena(pwsAleatorio)

              Logger.NumerodePaso(4)
              Logger.step('Hacer clic en "Sing up" para registrar el usuario.') 
              SignupMetodos.clickOnSignUpButton();
              cy.wait(6000)
              Logger.verificacion('Verificar que se muestre el mensaje "This user already exist." ')
              SignupMetodos.verificamsgelusuarioyaExisteSeMuestre.apply();

       });



});