// Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
//Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

const handleFilterNumber = (array = [], filt = []) => {
  const diff = array;

  for (let k = 0; k < filt.length; k++) {
    const arrayCondicao = filt[k];
   
    for (let index = 0; index < array.length; index++) {
      const arrayPrincipal = array[index];

      if (arrayPrincipal == arrayCondicao) {
        diff.splice(index, 1);
      }
    }
  }

  return diff;
};

console.log(handleFilterNumber([5, 4, 3, 2, 5], [5,3]));
