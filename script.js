//execicio de troca de variavel 
let a = ' vermelha';
let b = ' azul';

let c = a ;

a = b  ;

b = c ;

console.log(a);
console.log(b);

//if e else 

// se a hora estiver entre 06:00 até 12:00 Bom dia! 
//se estiver entre 12:00 atém 18:00 Boa tarde! 
//caso contrario Boa noite! 

let hora = 14;

if(hora > 6 && hora < 12 ) {
console.log('Bom dia!');
}else if (hora > 12 && hora < 18){


    console.log('Boa tarde!');
}else{
    console.log('Boa noite!');

}

let permissao;

switch(permissao){
    case  'comum':
        console.log('usuario comum');
    break;

    case  'gerente':
        console.log('usuario gerente');
    break;

    case  'diretor':
        console.log('usuario diretor');
    break;

    default:
        console.log('usuario não reconhecido');
    

}

// loop 
/* 
for
while
do while
for in 
for of

*/

for(let i=0; i < 5; i++){
   if ( i % 2 !==0){
       console.log(i);
   }
}

let Pessoa = {
    nome : 'Cezar',
    idade : 23
};

//key-value

for (let chave in Pessoa){
    console.log(chave, Pessoa['nome']);
}


const cores = ['Vermelho', 'Azul', 'Verde']

for ( let indice in cores){
    console.log(indice, cores[indice])
}

// for-of

for (let cor of cores){
    console.log(cor);
}