
//esse é o estado centralizado 

import Lugar from "../modelo/Lugar";

//ele é gerenciado pelo redux
const estadoInicial = {
    lugares: []
}

//esse é um reducer
export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case "ADD_LUGAR":
            const lugar = new Lugar(
                new Date().toString(),
                action.payload.nomeLugar,
                action.payload.imagem
            )
            return {
                lugares: [...estado.lugares, lugar]
            }
            break;
        default:
            return estado
    }
}