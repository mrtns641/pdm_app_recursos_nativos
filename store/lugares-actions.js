export const ADD_LUGAR = 'ADD_LUGAR'

//essa é uma função criadora de ação
export const addLugar = (nomeLugar, imagem) => {
    //observe como ela devolve um JSON
    return {
        type: ADD_LUGAR, payload: { nomeLugar, imagem }
    }
}