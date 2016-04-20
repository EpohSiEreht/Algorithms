// Check to see if a number is a prime number
function isPrime(n){
  var divisor = 2;
  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    } else {
      divisor++;
    }
  }
  return true;
}