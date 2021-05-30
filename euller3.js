/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

//numero primo so divide por 1 e pelo proprio nome.
//fator primo é dividir o numero desejado pelo menor numero primo qnts vezes necessarios, quando nao der mais, adiciona 1 ao divisor
/* fatorial de 12
12 / 2 = 6
6 / 2 = 3
3 / 2 = blockroad (adiciona mais um no divisor 2+1 = 3);
3 / 3 = 1
2 * 2 * 3 = 12 -> maior  fatorial primo de 12 é 3;

fatorial 180;
180 / 2 = 90
90 / 2 = 45
45 /2 = blockroad ( adiciona o divisor + 1)
45 / 3 = 15
15 / 3 = 5
5 / 3 = blockroad (adiciona no divisor 3+1=4 ---> da novamente o blockroad, então adiciona + 1 -- > 4+1 = 5)
5 / 5 = 1;
2 * 2 * 3 * 3 * 5 = 180 -> maior fatorial de 180 é 5*/

var divisor = 2; 
var num = 600851475143;

while(num  > 1) {
    if (num % divisor === 0){
        num = (num / divisor);
    } else {
        divisor++;
    }
}

console.log(divisor)


