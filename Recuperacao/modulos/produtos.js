function Produtos(nome, preco, quantidade){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;  
    
}




const produtos = [
    new Produtos('Banana', 5, 10),
    new Produtos('Goiaba', 2, 20),
    new Produtos('Laranja', 2.5, 25),
    new Produtos('Abacate', 3, 15),
    new Produtos('Limão', 4.5, 20),
    new Produtos('Melão', 6, 8),
];

module.exports = [produtos, Produtos];