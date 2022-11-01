const arr = [2, 1, 3, 3, 2];


function duplicateFinder(array){
    let idx = 0;
    for (num in array){
        if (num[idx] === num[idx+1]){
            return num;
        } if (num[idx] !== num[idx+1]{
            idx++;
        }) if (idx=== array.length){
            return -1;
        }
    }
}

