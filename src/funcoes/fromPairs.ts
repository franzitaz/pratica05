import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */
 export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {

  //Cria um objeto vazio
  let objNovo:any = {};
  
  /*Faz um map que acessa o array do parâmetro 'args'.
  O 'item' de cada elemento da array 'args' será obsservado.
  A variável 'objNovo' vai receber um spread dela mesma para que as informações vindas do array 'args' estejam todas juntas no final e não sendo sobrescritas.
  Para para criar uma propriedade usamos o '[]' fora do 'item[0]' e usamos o index 0 (zero) para nos referir ao primeiro valor do elemento da array 'args'. Depois Usamos os dois pontos (:) para que esta propriedade receba o atributo (valor) vindo da index 1 do elemento da array 'args' (item[1]).

  */
  args.map(item => objNovo={...objNovo, [item[0]]: item[1]});

  return objNovo;
};