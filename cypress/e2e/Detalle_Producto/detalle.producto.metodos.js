import { CommonPageMetodos } from "../Common_Page/common.Page.metodos";
import { DetalleProductoElemento } from "./detalle.producto.elementos"

export class DetalleProductoMetodo{

    static clickBotonAgregarCarrito(){
        DetalleProductoElemento.buttons.agregarCarrito.click();
    } 

    static verificaMuestrePaginaDetalleProducto(){
        DetalleProductoElemento.buttons.agregarCarrito.should('be.visible')
    }

    static verificarMensajeProductoAgregado(){
        CommonPageMetodos.verifyAlert('Product added.')
    }


}