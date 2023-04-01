/* ###################   Interface   ######################### */

export default interface Rato{
    nome: string;
    fugir(): void;
}

class Jerry implements Rato{
    nome: string;

    fugir(){
        console.log("correndo.........")
    }
}