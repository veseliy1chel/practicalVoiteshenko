function mergeArray(arr){
    if(!Array.isArray(arr)) return "isn`t a array";
    let newArray = new Array();
    for(let i = 0; i<arr.length; i++){
        newArray = newArray.concat(arr[i]);
    }
    return newArray.sort((a,b)=>a-b);
}
let arr = [[2,5,7,4],[235,234,12,64],[765,235,72,47]];
console.log(mergeArray(arr));