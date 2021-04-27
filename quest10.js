// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

const handleFindValuesInArrays = (array1, array2) => {
    let novoArray = [];

    for (let i = 0; i < array1.length; i++) {
        const el1 = array1[i];
        
        for (let k = 0; k < array2.length; k++) {
            const el2 = array2[k];
            
            if (el1 == el2) {
                novoArray.push(el1)
            }
        }

    }

    return novoArray;
}

console.log(handleFindValuesInArrays([9, 8], [8, 9]));