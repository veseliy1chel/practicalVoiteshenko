function Add(num,num2){ return num+num2;}
function Sub(num,num2) {return num-num2;}
function Mul(num,num2) {return num*num2;}
function Div(num,num2) {return num2!=0?num/num2:"zero argument";}

function Calc(num,num2,func){
    if(typeof num != "number" || typeof num2 != "number") return "You haven`t write a number";
    if(typeof func != "function") return "please write a function";
    return func(num,num2);
}


console.log(Calc(3,0,Div));