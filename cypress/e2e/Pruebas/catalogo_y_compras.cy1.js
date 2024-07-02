import { carritoMetodos } from "../Carrito/carrito.metodos";
import { CommonPageData } from "../Common_Page/common.Page.data";
import { CommonPageMetodos } from "../Common_Page/common.Page.metodos";
import { DetalleProductoElemento } from "../Detalle_Producto/detalle.producto.elementos";
import { DetalleProductoMetodo } from "../Detalle_Producto/detalle.producto.metodos";
import { GraciasporsucompraElementos } from "../Gracias_por_su_compra/graciasporsucompra.elementos";
import { GraciasporsucompraMetodos } from "../Gracias_por_su_compra/graciasporsucompra.metodos";
import { HomeMetodos } from "../Home/home.metodos";
import { LoginData } from "../Login/Login.data";
import { LoginMetod } from "../Login/Login.metodos";
import { PlaceOrderData } from "../Place_Order/place.order.data";
import { PlaceOrderMetodos } from "../Place_Order/place.order.metodos";
import { Logger } from "../Utilitario/logger";

const usuario = LoginData.UsuarioValido;
const producto = 'ASUS Full HD'



describe(CommonPageData.testSuites.catalogoYCompras, () =>{


       it('Navegación or categorias', ()=>{
   
          Logger.NumerodePaso(1)
          Logger.step('Iniciar sesión como usuario registrado.')
          Logger.subStep('Navegar a la página demo')
          CommonPageMetodos.navegarEnMenus();
          Logger.subStep('Click en Link "Log In" ')
          CommonPageMetodos.clickMenuLogin();
          LoginMetod.login(usuario.usuariovalido, usuario.contrasenavalida)


          Logger.NumerodePaso(2)
          Logger.step('Navegar a la página de inicio')
          CommonPageMetodos.clickMenuHome();

         
          Logger.NumerodePaso(3)
          Logger.step('Seleccionar una cateroría de productos en el menú de navegación') 
          HomeMetodos.clickOpcionMonitor();
          Logger.verificacion('Verificar que se muestre la lista de productos correspondientes a la cateroría seleccionada')
          HomeMetodos.verifyProductosMostrados('Apple monitor 24')
          HomeMetodos.verifyProductosMostrados('ASUS Full HD')

       } )



       it('Agregar producto al carrito', ()=>{
   
         Logger.NumerodePaso(1)
         Logger.step('Iniciar sesión como usuario registrado.')
         Logger.subStep('Navegar a la página demo')
         CommonPageMetodos.navegarEnMenus();
         Logger.subStep('Click en Link "Log In" ')
         CommonPageMetodos.clickMenuLogin();
         LoginMetod.login(usuario.usuariovalido, usuario.contrasenavalida)


         Logger.NumerodePaso(2)
         Logger.step('Navegar a la página de inicio')
         CommonPageMetodos.clickMenuHome();

        
         Logger.NumerodePaso(3)
         Logger.step('Seleccionar una cateroría de productos en el menú de navegación') 
         HomeMetodos.clickOpcionMonitor();

         
         Logger.NumerodePaso(4)
         Logger.step('Hacer clic en un producto específico')
         HomeMetodos.clickEnProducto(producto)
         
         Logger.NumerodePaso(5)
         Logger.step('Verificar que se muestra la página de detalle del producto')
         DetalleProductoMetodo.verificaMuestrePaginaDetalleProducto();

         Logger.NumerodePaso(6)
         Logger.step('Hacer clic en boton "Agregar a carrito"')
         DetalleProductoMetodo.clickBotonAgregarCarrito();

         
         Logger.NumerodePaso(7)
         Logger.verificacion('Vefificar que ese muestra un mensaj ede confirmacion y el producto se agrega al carrito')
         DetalleProductoMetodo.verificarMensajeProductoAgregado();
         CommonPageMetodos.clickMenuCart();
         carritoMetodos.verificaProductoAgregadoAlCarrito(producto)         

      } )



      it('Realizar una compra', ()=>{
   
         Logger.NumerodePaso(1)
         Logger.step('Iniciar sesión como usuario registrado.')
         Logger.subStep('Navegar a la página demo')
         CommonPageMetodos.navegarEnMenus();
         Logger.subStep('Click en Link "Log In" ')
         CommonPageMetodos.clickMenuLogin();
         LoginMetod.login(usuario.usuariovalido, usuario.contrasenavalida)


         Logger.NumerodePaso(2)
         Logger.step('Navegar a la página de inicio')
         CommonPageMetodos.clickMenuHome();

        
         Logger.NumerodePaso(3)
         Logger.step('Seleccionar una cateroría de productos en el menú de navegación') 
         HomeMetodos.clickOpcionMonitor();

         
         Logger.NumerodePaso(4)
         Logger.step('Hacer clic en un producto específico')
         HomeMetodos.clickEnProducto(producto)
         
         Logger.NumerodePaso(5)
         Logger.step('Verificar que se muestra la página de detalle del producto')
         DetalleProductoMetodo.verificaMuestrePaginaDetalleProducto();

         Logger.NumerodePaso(6)
         Logger.step('Hacer clic en boton "Agregar a carrito"')
         DetalleProductoMetodo.clickBotonAgregarCarrito();

         
         Logger.NumerodePaso(7)
         Logger.verificacion('Vefificar que ese muestra un mensaj ede confirmacion y el producto se agrega al carrito')
         DetalleProductoMetodo.verificarMensajeProductoAgregado();
         CommonPageMetodos.clickMenuCart();
         carritoMetodos.verificaProductoAgregadoAlCarrito(producto) 
         
         
         Logger.NumerodePaso(8)
         Logger.step('Hacer clic en el menú "Car" de la barra de navegación')
         CommonPageMetodos.clickMenuCart();

         Logger.NumerodePaso(9)
         Logger.step('Verificar que se muestra la página del carrito de compras')
         carritoMetodos.verificaMuetraPaginaCarritoPorLaURL();


         Logger.NumerodePaso(10)
         Logger.step('Hacer clic en el botón "Place Order"')
         carritoMetodos.clickEnBotonPleceOrder();


         Logger.NumerodePaso(11)
         Logger.step('Completar los campos obligatorios en la página de informacion de envío')
         cy.wait(3000)
         PlaceOrderMetodos.insertaInformacionDeOrden(PlaceOrderData.testData)

         Logger.NumerodePaso(12)
         Logger.step('Hacer clic en el botón "Purchase"')
         PlaceOrderMetodos.clickOnPurchaseButton();


         Logger.NumerodePaso(13)
         Logger.step('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio')
         //GraciasporsucompraMetodos.verificabotonSuscess();
         //GraciasporsucompraMetodos.clickOnButon();
         
         cy.wait(4000)
         GraciasporsucompraMetodos.clickOnButon();
         cy.wait(4000)
         HomeMetodos.verificaMuetraPaginaHomePorLaURL();




      } )







})//final