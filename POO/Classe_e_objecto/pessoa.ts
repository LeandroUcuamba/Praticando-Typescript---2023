     /* ######################### Classe e Objecto ############################## */

export default class Pessoa {  // O export default é para utilizar ela fora deste arquivo;
    
    nome: string;
    idade: number;

    constructor(name: string, age: number){
        this.nome = name;
        this.idade = age;
    }
}

let p1 = new Pessoa("Leandro Ucuamba", 23);

console.log(`Nome: ${p1.nome}, Idade: ${p1.idade}`);