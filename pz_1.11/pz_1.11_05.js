function isPrime(num) {
    if(num == 1|| num==3||num==2) return "It`s prime";
    for(let i =2;i<Math.floor(Math.sqrt(num));i++){
        if(num%i==0) return "Isn`t prime";
    }
    return "It`s prime";
}

function isNegative(num){
    if(Math.abs(num)==num) return "Positive";
    else return "Negative";
}

function isDiv(num){
    let isDiv = false;
    let arr = [2,3,5,6,9]
    for(let i =0;i<5;i++){
        if(num%arr[i]==0) isDiv=true;
    }
    return isDiv?"Yes it division":"No it doesn`t division";
}

function task5(num){
    if(typeof num != "number"){
        console.log("isn`t a number");
    }
    else{
    console.log(isNegative(num));
    console.log(isPrime(num));
    console.log(isDiv(num));
    }
}

task5(53);

//task5("not a num");
