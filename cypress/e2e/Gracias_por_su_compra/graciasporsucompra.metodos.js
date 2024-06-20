import { GraciasporsucompraElementos } from "./graciasporsucompra.elementos";

export class GraciasporsucompraMetodos{

    static clickOnButon(){
        GraciasporsucompraElementos.botones.ok.click();
    }


    static verificabotonSuscess(){
        GraciasporsucompraElementos.icono.iconosuscess.should("exit");
    }

}