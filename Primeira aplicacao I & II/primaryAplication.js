let pessoas = [
    {
        altura : 1.80,
        sexo : 'M'  
    },
    {
        altura : 1.75,
        sexo : 'F'  
    },
    {
        altura : 1.70,
        sexo : 'M'  
    },
    {
        altura : 1.65,
        sexo : 'M'  
    },
    {
        altura : 1.55,
        sexo : 'F'  
    },
    {
        altura : 1.78,
        sexo : 'M'  
    },
    {
        altura : 1.45,
        sexo : 'F'  
    },
    {
        altura : 1.60,
        sexo : 'F'  
    },
    {
        altura : 1.63,
        sexo : 'M'  
    },
    {
        altura : 1.57,
        sexo : 'F'  
    },
    {
        altura : 1.59,
        sexo : 'F'  
    },
    {
        altura : 1.90,
        sexo : 'M'  
    },
    {
        altura : 1.85,
        sexo : 'M'  
    },
    {
        altura : 1.42,
        sexo : 'F'  
    },
    {
        altura : 1.81,
        sexo : 'F'  
    },
];



const maiorAltura = pessoas.reduce(function(prev, current) { 
	return prev.altura > current.altura ? prev : current; 
});

const menorAltura = pessoas.reduce(function(prev, current) { 
	return prev.altura < current.altura ? prev : current; 
});


console.log(maiorAltura);
console.log(menorAltura);


const mediaAltura = array => {
    let media = 0;
    let qtdSex = 0;
    let altSoma = 0;

    for (i = 0; i < array.length; i++) {
        var sexAux = array[i];
        if (sexAux.sexo === 'F') {
            qtdSex++;
            altSoma += sexAux.altura;
        }
    }
    media = altSoma / qtdSex;
    return media
};

console.log('A média de altura das mulheres é de ' + mediaAltura(pessoas));




 const qtdHomens = pessoas.filter(function(QtdHomens){
    return QtdHomens.sexo == 'M';
});

console.log('A quantidade de Homens é: ' + qtdHomens.length);


