// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]


const handleDivideArray = (array,separador) => {
    let novoArray = [];

    for (let i = 0; i < array.length; i = i + separador) {
      novoArray.push(array.slice(i, i + separador));
    }
    return novoArray;
}

console.log(handleDivideArray([1, 2, 3, 4, 5], 5));
