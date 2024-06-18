
describe('Inicio página login', () => {
  

    it('Pasos user pws', ()=>{
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
      //LoginMetod.login('demothon', 'Admin123')
      
    
    
    
    })
    
    
    
    
    })//final