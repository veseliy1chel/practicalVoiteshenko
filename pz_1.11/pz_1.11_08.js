function averageValue(arr){ //average value is better than calculate)
    if(!Array.isArray(arr)) return "isn`t array";
    return arr.reduce((num,num1)=>num+num1)/arr.length;
}

console.log(averageValue([2,3,4,5,7,7,5,3]));