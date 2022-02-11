let num = 0;
while(num<100){

if(num == 1|| num==3||num==2) console.log(num);
let isPrime = true;
for(let i =2;i<Math.floor(Math.sqrt(num));i++){
    if(num%i==0) isPrime=false;
}
if(isPrime) console.log(num)
num++;
}