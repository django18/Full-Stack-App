var primeNumber=function(num)
{
  for(var j=2;j<num;j++)
  {
   for (var i = 1; i <j; i++) {
  	if(j%i!=0)
  		break;
  }	
  if(i==j)
  	console.log(j+" is a prime number.");
  else 
  	console.log(j +" is not a prime number");
  }
  
}


console.log(primeNumber(10)); 