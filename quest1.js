// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

const handleCreateArray = (len =1,value=0) => {
   let array = [];
   
   for (let index = 0; index < len; index++) {
      array.push(value);
   }
   return array;
}

console.log(handleCreateArray(4,'b'));
