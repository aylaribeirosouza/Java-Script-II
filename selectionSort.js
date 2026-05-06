const livros = require('./listadeLivros');
const maiorValor = require('./maiorValor'); 

for (let atual = 0; atual < livros.length; atual++) {
  let maior = maiorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMaiorPreco = livros[maior];

  
  livros[atual] = livroMaiorPreco;
  livros[maior] = livroAtual;
}

console.log(livros);

console.log("Trabalho realizado por Ayla Vitória, Nº 5");
