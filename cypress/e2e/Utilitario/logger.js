export class Logger{
    
    static NumerodePaso(numero){
        const text = `Step # ${numero}` //con alt 96 se sacan las comillas
        // para que en el log se muestre el Step mas el número de paso
        cy.log(text)
        //para poner tambien en el reporte de allure
        cy.allure().step(text) 
    }


    static step(descripcion){
        const texto = `Step - ${descripcion}`
        // para que en el log se muestre la descripcion 
        cy.log(texto)
        //para poner tambien en el reporte de allure
        cy.allure().step(texto) 
    }


    static verificacion(descripcion){
        const texto = `Verificacion - ${descripcion}`
        // para que en el log se muestre la descripcion 
        cy.log(texto)
        //para poner tambien en el reporte de allure
        cy.allure().step(texto) 
    }



    static subStep(descripcion){
        const texto = `SubStep - ${descripcion}`
        // para que en el log se muestre la descripcion 
        cy.log(texto)
        //para poner tambien en el reporte de allure
        cy.allure().step(texto) 
    }



    static subVerificacion(descripcion){
        const texto = `SubVerificacion - ${descripcion}`
        // para que en el log se muestre la descripcion 
        cy.log(texto)
        //para poner tambien en el reporte de allure
        cy.allure().step(texto) 
    }


}//final