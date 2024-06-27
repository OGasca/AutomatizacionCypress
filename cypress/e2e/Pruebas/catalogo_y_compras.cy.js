import { CommonPageData } from "../Common_Page/common.Page.data";
import { CommonPageMetodos } from "../Common_Page/common.Page.metodos";
import { HomeMetodos } from "../Home/home.metodos";
import { LoginData } from "../Login/Login.data";
import { LoginMetod } from "../Login/Login.metodos";
import { Logger } from "../Utilitario/logger";

const usuario = LoginData.UsuarioValido;



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


})