function cleanArray(arr, functionCallback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!functionCallback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(cleanArray([3, 6, 9, 2], num => num > 3));
