// Delclare uma variável de nome weight
const weight = 36;
// 2. Que  tipo de dado é a variável a cima
// console.log(typeof weight)

/* 3. Declare uma variável e atribua valores para cada um dos dados:
 * name: String
 * age: Number (interger)
 * stars: Number (float)
 * isSubscribed: Boolean
 */
// let name = 'Isa'
// let age = 21
// let stars = 4.5
// let isSubscribed = true

// 4. A variável student abaixo é de que tipo de dado ?

// 4.1 Atribua a ela as mesma propiedades e valores do execicio 3.

//4.3 Mostre no console a seguinte mensagem: <name> tem <age> anos e pesa <weigth> kg.

let student = {
    name: "Isa",
    age: 25,
    weigth: 45.9,
    isSubscribed: true,
}
let stude
console.log(
    `${student.name} tem ${student.age} anos e pesa ${student.weigth} kg.`
);

// 5. Declare uma variável do tipi array, de nome students e atribua a ela nunhum valor, ou seja, um array vazio
// const students = []

// 6. Reatribua valor para variável acima, colocando dentro dela o objeto studentsda questão 4.

const students = [
    student
];

console.log(students[0]);