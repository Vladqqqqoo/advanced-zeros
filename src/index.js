module.exports = function getZerosCount(number, base) {
	// your implementation
var ar= [];
var div = 2;
var flag;
var i=0;
var tmp = [];

var a=0;
 
  while (base > 1)//раскладываем систему на простые множители
  {
    b=0;
    while (base % div === 0)
    {
      base = base / div;
      a=div;
      b++;
		}
		if(b!==0){
		ar[i]=a;
    tmp[i]=b;
    i++;}
    if (div == 2) div++;
    else div += 2;
  }
  
  
  function maxPowerOf(p,n)
{
    let k = 0;
    let powerOfP = 1;
    while (true)
    {
        powerOfP *= p;
        let addend = Math.floor( n / powerOfP);
        if (addend === 0)
            return k;
        k += addend;
    }
}

var res=[];

  for(let i=0; i<ar.length;i++){
    res[i]=Math.floor(maxPowerOf(ar[i],number)/tmp[i])
  }
  
  var answer=0;

 answer= Math.min.apply(null, res);

return answer;
}