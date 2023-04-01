// Tipos Básicos
let age: number = 5;
const firstName: string = "Felipe";
const isValid: boolean = true;
let unKnow: any = 9; // O any -> ele pode receber qualquer tipo de dados;
unKnow = "12";
unKnow = true;

const ids: number[] = [1,2,3,4,5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Leandro", "Ucuamba"];

console.log(age);
console.log(names[1]);

// Tupla
const person: [number, string] = [1, "Leo"]; // Come se fosse uma lista;

// Lista de Tuplas
const people: [number, string][] = [
    [1,"Tania"],
    [2,"Gustavo"]
];

// Intersections 
const produtoID: string | number | boolean = false;

// Enum
enum Direction {
    Up = 1,
    Down = 3,
    Left = 'Esquerda'
}

const direction = Direction.Up

console.log(direction)

// Type Assertions
const productName: any = 'Bone';

let itemId = productName; // A variavel "itemId", automaticamente é "any";
let itemId1 = productName as string; // O "productName" será "string", e o "itemId1", também assume;
let itemId2 = <number>productName; // O "productName" será "number", e o "itemId2", também assume;