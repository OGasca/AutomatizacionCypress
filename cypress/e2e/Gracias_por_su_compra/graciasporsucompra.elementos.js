export class GraciasporsucompraElementos{
      
    
    static get botones(){
        return{
            get ok(){
                return cy.contains('button', 'OK')
            },
        };
      }


      static get icono(){
        return{
            get iconosuscess(){
                return cy.get('div.sa-placeholder')
            },
        };

      }


}