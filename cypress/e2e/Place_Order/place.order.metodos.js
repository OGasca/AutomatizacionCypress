import { PlaceOrderData } from "./place.order.data";
import { PlaceOrderElementos } from "./place.order.elementos";


export class PlaceOrderMetodos{
   
    //creamos los metodos para insertar los datos en los campos
    static insertName(name){
        PlaceOrderElementos.textboxes.name.invoke('val', name);
        
    }

    static insertConuntry(country){
        PlaceOrderElementos.textboxes.country.invoke('val', country);
        
    }

    static insertCity(city){
        PlaceOrderElementos.textboxes.city.invoke('val', city);
        
    }


    static insertCreditCard(creditCardNumber){
        PlaceOrderElementos.textboxes.creditcard.invoke('val', PlaceOrderData.testData.creditCardNumber);        
        
    }

    static insertMonth(month){
        PlaceOrderElementos.textboxes.month.invoke('val', month);
        
    }

    static insertYear(year){
        PlaceOrderElementos.textboxes.year.invoke('val', year);
        
    }

    static clickOnCloseButton(){
         PlaceOrderElementos.botones.close.click();
         
    }

    static clickOnPurchaseButton(){
         PlaceOrderElementos.botones.purchase.click();
         
    }

    static insertaInformacionDeOrden(data){
        this.insertName(data.name)
        this.insertConuntry(data.country)
        this.insertCity(data.city)
        this.insertCreditCard(data.creditcard)
        this.insertMonth(data.month)
        this.insertYear(data.year)
    }






}//final