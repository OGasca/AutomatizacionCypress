
import { SignupElements, SignupMetodos } from "./Signup/signup.metodos" //Se importa la clase de LoginMetod
import { SignupData, usuarioValido } from "./Signup/signup.data"




describe('Crea usuario en SignUp', () => {
  

it('Crea usuario contraseña', ()=>{
  cy.viewport(1400, 1100)
  
  //Ingresa a la página web
  cy.visit('https://demoblaze.com/index.html')
  
  //Click en SignUp
  cy.get('a[data-target="#signInModal"]').click()


  //Se llaman los metodos individualmente
  /*
  cy.wait(5000)
  LoginMetod.inserUsuario('demothon')
  cy.wait(5000)
  LoginMetod.insetPws('Admin123')
  cy.wait(5000)
  LoginMetod.clickOnLoginbutton()
  */ 


  // llamamos al metodo que contiene el usuario pws y click, ingresamos los datos de cada campo
  //LoginMetod.login(LoginData.UsuarioInvalido.username,  LoginData.UsuarioInvalido.password )
  
  SignupMetodos.signUp(SignupData.usuarioValido.usuariodata, SignupData.usuarioValido.contrasenadata)
  
 



})




})//final