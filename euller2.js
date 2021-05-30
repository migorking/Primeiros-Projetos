/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

// Temos que fazer uma sequencia de Fibonacci < que 4kk e somando só os numeros pares.

var limite = 4000000
var previous = 1;
var value = 2;
var sum = 2;

while (value < limite) {
    var temp = value;
    value = value + previous
    previous = temp;

    if (value % 2 === 0){
      sum = sum + value;
    }
}
console.log(sum)