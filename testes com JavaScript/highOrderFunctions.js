// FUNCAO COMO PARAMETRO:
const somar  = (a, b) => a + b;         //
const subtrair  = (a, b) => a - b;      //    funcoes
const multiplicar  = (a, b) => a * b;   //
const dividir  = (a, b) => a / b;       //

//funcao recebendo um parametro que podera ser
//uma variavel que armazena outra funcao
const calc = (operacao, a, b) => operacao(a,b); //retorna funcao como parametro

let result = calc(dividir,10,2);
console.log(result);

//FUNCAO COMO RETORNO:
const somarX = (x) => (y) => y+x;
// funcao que recebe um parametro X, que armazena a funcao
// "(y) retorna y+x"
const somar1 = somarX(1);//sendo assim, o valor setado no parametro
//somarX é armazenado em x, logo, somarX vale (y) => y+(valor setado)
//e somar1 vira uma funcao que recebe um parametro em Y e retorna
//sua soma com o valor setado em x 
console.log(somar1(5));


//teste de funcao de alta ordem passando uma funcao como parametro
//ok em 18 de julho de 2021