function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
function createArray(num){
    let arr = new Array(num);
    if(typeof num !="number") console.log("isn`t a number");
    else{
        for(let i =0;i<num;i++){
            arr[i] = new Array(num);
            for(let j =0;j<num;j++){
                arr[i][j] = getRandomIntInclusive(-100,100);
            }
        }
        
        return arr;
    }
}
function replaceValue(arr){
    if(!Array.isArray(arr)) return "isn`t array";

    for(let i =0;i<arr.length;i++){
        
        
        if(Math.abs(arr[i][i])==arr[i][i]){
            arr[i][i]=1;
        }
        else{
            arr[i][i]=0;
} 
    }
    return arr;
}

console.log(replaceValue(createArray(5)));