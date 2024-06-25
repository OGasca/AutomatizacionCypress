
import { LoginMetod } from "./Login/Login.metodos" //Se importa la clase de LoginMetod
import { LoginData } from "./Login/Login.data"




describe('Inicio página login', () => {
  

it('user pws INVALIDO', ()=>{
  cy.viewport(1400, 1100)
 
  cy.visit('https://demoblaze.com/index.html')
  //cy.get('a#login2').click()
  cy.get('a[data-target="#logInModal"]').click()


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
  LoginMetod.login(LoginData.UsuarioInvalido.username,  LoginData.UsuarioInvalido.password )

  
})


it('user pws VALIDO', ()=>{
  cy.viewport(1400, 1100)
 
  cy.visit('https://demoblaze.com/index.html')
  //cy.get('a#login2').click()
  cy.get('a[data-target="#logInModal"]').click()


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
  LoginMetod.login(LoginData.UsuarioValido.usuariovalido,  LoginData.UsuarioValido.contrasenavalida )

  
})






})//final