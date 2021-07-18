let vet1 = [
    [  'a',     'b',    'c'  ],
    [   1,       2,      3   ],
    ["pedro", "paulo", "joao"]
];
console.log("este é o vetor inteiro ----> "+vet1);
console.log();

for (let l of vet1) {
    for(let c of l){
        console.log(c);//os elementos do vetor em quebras de linha sucessivas
    }
}

//ok em 16 de julho de 2021