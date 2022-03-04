/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
 export const uniq = (args: number[]): number[] => {

  let arrNova: number[] = []; //Crie uma array nova e vazia para receber os números da array que chega no parâmetro 'args'

  //Verifica os números do array que chega no parâmetro 'args'
  for (let i = 0; i < args.length; i++) {

    let numIgual: boolean = false; //Verifica se o número é igual ou não

    //Verifica os números da array "juncao". Se existir um número igual entre a array "juncao" e a array "uniao", não colocar o número na array "juncao"
    for (let j = 0; j < arrNova.length; j++) {

      if (arrNova[j] === args[i]) {
        numIgual = true;
        break;
      }
    }

    //Se o número for diferente, colocá-lo na array "juncao"
    if (numIgual === false) {
      arrNova.push(args[i]);
    }
  }

  return arrNova;

};