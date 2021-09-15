console.log("Olá, Cezar!!")
console.log("Olá, Tudo bem ?")

//#Variaveis

let idade = 23; 

console.log(idade) // criando a variavel 

//const  nome;// não pode mudar! 

//#Tipo primitivos do java script 

let meuNome = ' Cezar'; //String
let Idade = 25; // number leteral
let estaAprovado = true; //booblean
let sobrenome = undefined; // undefined
let corSelecionado = null; //redefinir um valor

console.log(meuNome)

//#Objetos

let pessoa  = {
    nome: 'Eduardo',
    idade: 23,
    sobrenome: 'Araujo'
};

console.log(pessoa)

//Arrays 


let Arrays = [21,34,52,23];

console.log(Arrays.length)

console.log(Arrays)


//#Função 

let corSite = 'Azul';

function resetaCor( cor , tonalidade ){
    corSite = cor + ' ' + tonalidade ;

};

console.log(corSite);
resetaCor("verde" , "claro");
console.log(corSite);

//Tipo de funções (Realiza um tarefa e não retorna nada )
function dizerNome (){
    console.log('Cezar Eduardo')
};

dizerNome();


// função que tem return vai retorna alguma coisa.
function MultiplicarPorDois(valor){
    return valor * 2 ;
};

console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);


console.log(resultado)

//Operadores

//Operadores Aritiméticos(matematicos)
//operadores Atribuição 
//operadores de Comparação
//Operadores Lógicos
//operadores Bitwise


let salario = 100;

// + , - , 8 , / **

console.log(salario + salario)
console.log(salario / salario)
console.log(salario * salario)
console.log(salario - salario)
console.log(salario * salario)


let valorTeccladoGamer = 100 ;


valorTeccladoGamer += valorTeccladoGamer

console.log(valorTeccladoGamer)


//operador de igualdade

console.log( 1 === 1);

console.log ('1' === 1) // recomendado ultilizar esse aqui (vai ter certeza que vai fazer a comparação correta)

//igualdade solta 

console.log(1 == 1 );
console.log('1' == 1 );

//compardor ternário

//tem um cliente, 100 premium, commun

let ponto = 100;
let tipo = ponto > 100 ? 'premium' : 'comum';

console.log(tipo);

// operador logicos (&&)

// retorna true se so dois operadores forem true

console.log(true && true);


//operador lógico ou (||)

let maiorDeIdade = false;
let possuiCarteiraDeTarabalho = true ;
let podeAplicar = maiorDEIdade || possuiCarteiraDeTarabalho;

console.log('pode aplicar: ', podeAplicar)

//operador primitivo

console.log('ola dufapdápdẃ');

//verade ou falso 


let corPersonalizada = 'vermelha';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;


console.log(corPerfil)
