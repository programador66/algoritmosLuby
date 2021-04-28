// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

const handleObjectConversion = (array = []) => {
        
   let retorno = {};
   
   array.map(vl => {

      const obj = vl.reduce((ob,str) => {
         const [key, value] = ob;
         return {
            [key]: str
         }
      })

      return obj;

   }).forEach((item,key) => {
      const valor = Object.values(item)[0];
      const chave = String(Object.keys(item)[0]);
      retorno[chave] =  valor;
   })




   return retorno;

}

console.log(handleObjectConversion([["c",2],["d",4]]));