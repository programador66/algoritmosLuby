// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

const handleVerifyArray = (array) => {

   let res = array.reduce((list, sub) => list.concat(sub), [])

    return res;
}

console.log(handleVerifyArray([1, 2, [3], [4, 5]]));

