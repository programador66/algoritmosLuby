// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

const handleClearArray = (array) => array.filter(arr => arr);

console.log(handleClearArray([undefined,1,2,'',null]));