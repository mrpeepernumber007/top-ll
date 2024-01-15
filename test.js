function returnObject (input1, input2) {
    const nombre = input1
    const parteDelCuerpoMasPesada = input2
    return { nombre, parteDelCuerpoMasPesada}
}

console.log(
    returnObject('peperino', 'culo').parteDelCuerpoMasPesada
);