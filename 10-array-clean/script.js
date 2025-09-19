function cleanArray(arr, functionCallback) {
    return functionCallback(arr);
}

console.log(cleanArray([1, 2, 3, 4, 5], function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]  > 3) {
            arr.splice(i, 1);
            return  true;
        } else {
            return false;
        }
        
    }
    return arr;
})); 
