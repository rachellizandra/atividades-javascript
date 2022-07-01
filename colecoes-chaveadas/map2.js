// com o this 
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
      return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this => maçã', mapComThis(nums, maca));
console.log('this => laranja', mapComThis(nums, laranja));


// sem o this
function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2
    })
}

const number = [2, 4, 6, 8, 10];
console.log(mapSemThis(number));
