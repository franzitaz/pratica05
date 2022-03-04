import { writeFile, readFile, readFileSync } from 'fs';
import { resolve } from 'path';

const ARQUIVO_DE_FILA = `${resolve('.')}/files/fila.txt`;

/**
 * Os métodos escritos abaixo implementam uma fila de mensagens escritas em
 * arquivo de texto, presente na pasta "files". A cada mensagem escrita nesta fila,
 * (através do método `escreveNaFila`) o código escreve a frase ao final do arquivo.
 * O método `consumirDafila` retira a primeira mensagem escrita no arquivo e a retorna.
 *
 * As funções abaixo estão todas escritas utilizando callbacks como soluções
 * para a manipulação dos arquivos.
 *
 * Tranforme a solução escrita abaixo em um código válido utilizando promises ou
 * async/await.
 */

export async function escreveArquivo(texto: string): Promise<void> {
  return new Promise((resolve, reject) => {
    writeFile(ARQUIVO_DE_FILA, texto, 'utf8', function (err) {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
}

export async function leArquivo(): Promise<string> {
  return new Promise((resolve, reject) => {

    readFile(ARQUIVO_DE_FILA, 'utf8', (err, resultado) => {
      if (err) {
        reject(err);
      }

      resolve(resultado);
    });
  });

}


export async function zerarAquivo(): Promise<void> {
  return await escreveArquivo('');
}

export async function escreveNaFila(texto: string): Promise<void> {
  return new Promise(async (resolve, reject) => {

    const textoArquivo = await leArquivo();

    console.log('texto encontrado anteriormente no arquivo', texto);
    const novoTexto = textoArquivo ? `${textoArquivo}\n${texto}` : texto;

    escreveArquivo(novoTexto).then((response) => {
      resolve()
    }).catch((error) => {
      reject('texto escrito no arquivo')
    });
  });
}

export async function consumirDaFila(): Promise<string> {
  return new Promise(async (resolve, reject) => {
    
    const textoAtual = await leArquivo();

    console.log('texto encontrado anteriormente no arquivo', textoAtual);
    const [linhaConsumida, ...linhas] = textoAtual.split('\n');
    console.log('======== linha consumida', linhaConsumida);

    escreveArquivo(linhas.join('\n')).then((response) => {
      resolve(linhaConsumida)
    }).catch((error) => {
      reject(error)
    })
  });
}
