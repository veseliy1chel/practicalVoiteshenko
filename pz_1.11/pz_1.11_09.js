function reverse_powNum(arr){
    if(!Array.isArray(arr)) return "isn`t an array";

    return arr.reverse().map(value=>{
        if(typeof value == "number") return Math.pow(value,2);
        else return value;
    });;
     
}

console.log(reverse_powNum([2,"dfs",7,"e",3,6,"234"]));