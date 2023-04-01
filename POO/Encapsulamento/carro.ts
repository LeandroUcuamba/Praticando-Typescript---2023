/* ################### Encapsulamento ######################### */

class Carro{
    private cor: string;
    private ano: number;
    private valor: number;

    constructor(c: string, a: number, v: number){
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }

    public getValor(): number{
        return this.valor;
    }

    public setValor(valor: number){
        this.valor = valor;
    }

}


let c = new Carro("preto", 2020, 20000);

console.log();
console.log();
console.log();
c.setValor(12050);
console.log(c.getValor());