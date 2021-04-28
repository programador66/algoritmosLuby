// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

const handleArrayInvertion = (array = [0]) => {
   let arr = [];
 
   for (let index =  array.length - 1; index >=0; index--) {
      arr.push(array[index]);
   }

   return arr;
}

console.log(handleArrayInvertion([1,2,3,4]));