
function positiveNumbers(numbers) {
    let positive = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element >= 0) {
            positive.push(element);
        }
        else {
            break;
        }
    }
    return positive;
}

const numbers = [23, 61, 53, 67, -45, -21, 92];
const positiveNum = positiveNumbers(numbers);
console.log(positiveNum);
