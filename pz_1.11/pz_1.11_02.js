function task2(arr){
    if(!Array.isArray(arr))return "isn`t a array!";
    return arr.filter(value => {if(arr.indexOf(value)==arr.lastIndexOf(value)) return value;})[0];
}


let arr = [2,4,2,2,2,2,2,2];
console.log(task2(arr));