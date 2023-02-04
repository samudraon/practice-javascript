const array = [23, 32, 86, 91, 34, 81, 4];


let length = array.length;
console.log(length);
const change = array.slice(4);
console.log(change)

for (let i = 0; i< array.length; i++) {
    const arr = array[i];
    if (arr < 80) {
        continue;
    }
    console.log(arr);
}