/**
 * Remove todos os valores "falsy" da lista de itens. Lembrando que false, 0, '',
 * null e undefined são valores falsy.
 * 
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
//Para remover os itens falsy de uma array, uso o método .filter(). O método não altera a array original.
export const compact = (items: unknown[]): unknown[] => {
  return items.filter(valorF => valorF !== 0 && valorF !== false && valorF !== '' && valorF !== null && valorF !== undefined)
 };