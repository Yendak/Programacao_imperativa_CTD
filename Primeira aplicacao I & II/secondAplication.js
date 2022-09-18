let pessoas = [
    {
        altura : 1.80,
        sexo : 'M',
        idade: 18,
        opniao: 1, 
    },
    {
        altura : 1.75,
        sexo : 'F',
        idade: 21,
        opniao: 1,   
    },
    {
        altura : 1.70,
        sexo : 'M',
        idade: 22,
        opniao: 2,   
    },
    {
        altura : 1.65,
        sexo : 'M',
        idade: 30,
        opniao: 3,   
    },
    {
        altura : 1.55,
        sexo : 'F',
        idade: 26,
        opniao: 3,   
    },
    {
        altura : 1.78,
        sexo : 'M',
        idade: 20,
        opniao: 2,   
    },
    {
        altura : 1.45,
        sexo : 'F',
        idade: 23,
        opniao: 1,   
    },
    {
        altura : 1.60,
        sexo : 'F',
        idade: 27,
        opniao: 2,   
    },
    {
        altura : 1.63,
        sexo : 'M',
        idade: 31,
        opniao: 3,   
    },
    {
        altura : 1.57,
        sexo : 'F',
        idade: 19,
        opniao: 2,   
    },
    {
        altura : 1.59,
        sexo : 'F',
        idade: 28,
        opniao: 1,   
    },
    {
        altura : 1.90,
        sexo : 'M',
        idade: 29,
        opniao: 3,   
    },
    {
        altura : 1.85,
        sexo : 'M',
        idade: 22,
        opniao: 3,   
    },
    {
        altura : 1.42,
        sexo : 'F',
        idade: 24,
        opniao: 1,   
    },
    {
        altura : 1.81,
        sexo : 'F',
        idade: 18,
        opniao: 2,   
    },
];

{
    const mediaIdades = (array) =>{


        let soma = array.reduce(function(acumulador, i){
          return acumulador + i.idade},0);
        
          return Math.round(soma / pessoas.length)
      
      }
      
    console.log("Média de idades das pessoas que responderam Ótimo: ",mediaIdades(pessoas),"anos");

    const qtdPessoas = (array) =>{

        let pessoasRegular = array.filter(function(array){return array.opniao === 1});
      
        return pessoasRegular.length
      
      }
      
      console.log("A quantidade de pessoas que responderam Regular: ",qtdPessoas(pessoas));


      const porcentagem = (array) =>{

        let pessoasBom = array.filter(function(array){
          return array.opniao === 2});
      
        return Math.round(pessoasBom.length / pessoas.length * 100)
      
      }
      
      console.log("A porcentagem de pessoas que responderam Bom:",porcentagem(pessoas)+"%"); 


}