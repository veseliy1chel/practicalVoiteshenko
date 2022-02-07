function task2(arr){
    
    if(!Array.isArray(arr)){
        console.log("isn`t a array!")
        
    }
    else{
        let val = arr[0];
        if(arr.lastIndexOf(val)==0){ console.log(val);}
        else{
            const ret = arr.filter(value => {
                return value!= val;
            });
            console.log(ret[0]);
        }
    }
}

let arr = [2,2,2,2,5,2,2,2];
task2(arr);