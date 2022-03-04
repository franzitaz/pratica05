/**
 * Cria um array de grupos de elementos divididos em tamanho máximo igual ao parâmetro
 * "tamanho". O último elemento deste novo array deverá conter o restante dos itens,
 * caso a divisão não seja perfeitamente correta.
 * 
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 * 
 * ex.: chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
 * 
 * @param valores array de números que deverão ser quebrados em grupos.
 * @param tamanho numero que representa o tamanho máximo de cada grupo.
 * @returns 
 */
 export const chunk = (valores: number[], tamanho: number): number[][] => {

  //Cria uma cópia da array que chega no parâmetro valores, pois o método .splice() altera a array original.
  const arrCopia = [...valores];
  //Variável recebe os grupos que são separados. A tipagem é uma array dentro da array.
  let arrNova:number[][]=[];

  //Repetição olha para a cópia da array valores, separa o grupo conforme o parâmetro tamanho e coloca o grupo na arrNova.
  for (let i=0; i < arrCopia.length; i++) {
    arrNova.push(arrCopia.splice(0,tamanho));
  }

  //Coloca o que sobrou da arrCopia na arrNova.
  arrNova.push(arrCopia);
  
  return arrNova;
};