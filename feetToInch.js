function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const inches = feetToInch(1.5);
console.log(inches, 'inch');

function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
const meter = centimeterToMeter(100);
console.log(meter, 'meter');