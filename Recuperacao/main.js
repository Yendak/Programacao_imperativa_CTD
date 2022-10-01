const [produtos, Produtos] = require('./modulos/produtos');
const prod = produtos;

// insere informacao de lucro no array
prod.map(i => i.lucro = parseFloat(parseFloat(i.preco * i.quantidade).toFixed(2)));
console.log(prod);


// 1. Calcular o lucro total de todos os produtos;
let lucroTotal = prod.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
console.log(lucroTotal);


// 2. Permitir pesquisar um produto pelo nome e calcular seu lucro total;
function buscaProduto(nome) {
    let produto = prod.find(produto => produto.nome === nome);
    let lucroProduto = produto.preco * produto.quantidade;
    console.log(`O produto ${produto.nome} teve lucro de ${lucroProduto}`);
    return info = [produto.nome, produto.preco, produto.quantidade, lucroProduto];
}
console.log(buscaProduto('Laranja'));


// 3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
function buscaProdutoValor(valor) {
    let produtos = prod.filter(produto => produto.preco * produto.quantidade > valor);
    return produtos;
}
console.log(buscaProdutoValor(20));


// 4. Classifique todos os produtos pela quantidade de dinheiro que geraram.
function classificaProduto() {
    prod.sort((a, b) => b.lucro - a.lucro);
    return prod;
}
console.log(classificaProduto());


// 5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
function buscaProduto2(nome) {
    let produto = prod.find(produto => produto.nome === nome);
    return produto;
}

function atualizaProduto(produto, novoPreco) {
    return buscaProduto2(produto).preco = novoPreco;
}
console.log(atualizaProduto('Laranja', 3.50));
console.log(prod);


// 6. Calcule o lucro total após pagar 45% do lucro em impostos.
function calculaImposto(lucroTotal) {
    let imposto = lucroTotal * 0.45;
    return parseFloat(parseFloat(lucroTotal - imposto).toFixed(2));
}
console.log(calculaImposto(lucroTotal));