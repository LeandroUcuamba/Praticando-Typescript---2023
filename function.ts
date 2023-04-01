//Funções

const sum = (x: number, y: number) => {
   return x + y;
}

const multiply = (k: number, b: number): number => { // Passando o tipo de retorno;
    return k + b;
}

const add = (num1: number, num2: number): string => { // Convertendo o retorno;
    return (num1 + num2).toString();
}
  
const log = (message: string): void => { // Função sem retorno;
    console.log(message)
}