// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]


const handleFindDuplicatesValues = (array) => [...new Set(array)]


const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}

const handleFindDuplicatesValues2 = (array) => array.filter(onlyUnique);

console.log("Metodo 1")
console.log(handleFindDuplicatesValues([1,2,3,3,2,4,5,4,7,3]))

console.log("Metodo 2")
console.log(handleFindDuplicatesValues2([1,2,3,3,2,4,5,4,7,3]));

