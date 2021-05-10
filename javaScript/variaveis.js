var Nome = "Glaucio";
var Idade = "22";
var Sexo = "Feminino";
var GostaDePão = true;
var Sexo = "Masculino";
// Concatenando valores 
console.log(
  "A " +
    Nome +
    " tem " +
    Idade +
    " anos " +
    "Será que ela gosta de pão? " +
    GostaDePão +
    ""
);
// Mostra o tipo de dado, neste caso Number.

console.log(typeof Idade);


  // Let só funciona dentro do escopo  
{
  let Nome = "Isabela";
  console.log(Nome);
}

{
  let Nome = "Joana";
      Nome = "Leticia" // Dando um novo valor a mesma variavel 
  console.log(Nome);
}

{const numero1 = 40
 const numero2 = 50
 console.log(numero1 + numero2)

}
{
    const numero1 = 20
    const numero2 = 10
    // Numero2 = 20 O codigo apresentaria um erro pois não consigo alterar o valor de uma variavel CONST. Diferente de var e let.
    console.log(numero1 + numero2)
}
// Agrupamento de declarações
{
let  sobrenome, cidade
sobrenome = "Pereira"
cidade = "Betim"
console.log( sobrenome, cidade); // Multiplos argumentos na função
}
// Interpolando valores com template literals or template strings
console.log(`o ${Nome} tem ${Idade} anos.`)