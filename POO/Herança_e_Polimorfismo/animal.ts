     /* ################### Herança e Polimorfismo ######################### */

export default class Animal {
    tipo: string;
    nome: string;
    idade: number;

    constructor(t: string, n: string, i: number){
        this.tipo = t;
        this.nome = n;
        this.idade = i;

    }

    public Comunicar(): void{
       console.log("audio.......");
    }
}


class Cachorro extends Animal{
    raca: string;

    constructor(t: string, n: string, i: number, r: string){
        super(t, n, i)
        this.raca = r;
    }
}


class Pessoa extends Animal{
    cor: string;

    constructor(t: string, n: string, i: number, c: string){
        super(t, n, i)
        this.cor = c;
    }
}


let cachorro1 = new Cachorro("Preto", "Stitch", 4, "Rotwailler");

console.log(cachorro1.tipo);
console.log(cachorro1.raca);
cachorro1.Comunicar();