function uniqueArray(arr){
    if(!Array.isArray(arr)) return "isn`t an array";

    let set = new Set(arr)
    return [...set];
}


console.log(uniqueArray([2,2,2,2,4,4,4,6,6,9]));