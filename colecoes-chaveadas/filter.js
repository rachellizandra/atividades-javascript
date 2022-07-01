const nums = [1, 3, 4, 6, 7, 9, 10];

function numPares(arr){
    return arr.filter(function(item) {
       return item % 2 === 0
    })
    
}

console.log(numPares(nums));