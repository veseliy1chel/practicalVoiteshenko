function func ( n){

    
    if(typeof n == "number"){
        let arr = new Array(n);

        for(let i =0;i<n;i++){
        arr[i] = n-i;
        }
        return arr;
    }
    else
        console.log("isn`t a number");
    
}

 let arr = func(10);
 console.log(arr);