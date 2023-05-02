var fibonacci=(n:number,num1=0,num2=1,depth=0):number=>
 {
  var 
  if (n==depth) return num2; 
  return fibonacci(n,num2,num1+num2,depth+1);
};
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));