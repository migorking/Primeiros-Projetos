var primo = parseInt(process.argv[2]);
var divisor = 0;

for (var i = 1; i <= primo; i++) {
    if (primo % i === 0) {
        divisor = divisor + 1;
    }
}
if (divisor === 2) {
    console.log ("O número "+ primo + " é primo");
}else{
    console.log ("O número "+ primo + " não é primo");
}