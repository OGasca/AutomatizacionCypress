import { CommonPageData } from "../Common_Page/common.Page.data"
import { CommonPageMetodos } from "../Common_Page/common.Page.metodos"
import { LoginData } from "../Login/Login.data"
import { LoginMetod } from "../Login/Login.metodos"
import { Logger } from "../Utilitario/logger"


describe(CommonPageData.testSuites.autenticacion, ()=>{
     it('Inicio de sesión válido', ()=>{

        Logger.NumerodePaso(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMetodos.navegarEnMenus();


        Logger.NumerodePaso(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMetodos.clickMenuLogin();


        Logger.NumerodePaso(3)
        Logger.step('Ingresar un nombre de usuario y contraseña válidos')
        LoginMetod.inserUsuario(LoginData.UsuarioValido.usuariovalido)
        LoginMetod.insetPws(LoginData.UsuarioValido.contrasenavalida)
        
       
        Logger.NumerodePaso(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión')
        LoginMetod.clickOnLoginbutton();
        Logger.verificacion('Verificar que se redirige al usuario a la pgania de inciio')
        CommonPageMetodos.verificaUserLogeado(LoginData.UsuarioValido.usuariovalido)



     })
})

