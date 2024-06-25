import { LoginMetod } from "./Login/Login.metodos";
import { Logger } from "./Utilitario/logger";



//ME QUEDO EN EL VIDEO 56 EN EL MINUTO 9:24 APENAS SE VA A CREAR ESTE ARCHIVO 

describe('pasos', () => {  

        it('Pasos', ()=>{
        const usuario = 'demothon'
        const pws     = 'Admin123'

        Logger.NumerodePaso(1)
        Logger.step('Navega a pagina demoblase')        
        cy.visit('https://demoblaze.com/index.html')   

        
        Logger.NumerodePaso(2)
        Logger.step('Hacer click en el login')        
        cy.get('a[data-target="#logInModal"]').click()   
        
        
        Logger.NumerodePaso(3)
        Logger.step('Logearse con usuario y contrasena:  "${usuario}/${pws}"') 
        LoginMetod.login(usuario, pws) 


        Logger.verificacion('El home deberia mostrar "Welcome ${usuario}" text') 
        cy.get('a#nameofuser').should('contain.text', usuario)         



        })




})//final