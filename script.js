function getAreaOfCircle (radius) {
    return Math.PI * (radius * radius);
}
function getCircumferenceOfCircle (radius) {
    return 2 * Math.PI * radius;
}
function getAreaOfSquare (side) {
    return side * side;
}
function getAreaOfTriangle (base,height) {
    return 0.5 * base * height;
}

console.log (getAreaOfCircle(3))
console.log (getCircumferenceOfCircle(10))
console.log (getAreaOfSquare(21))
console.log (getAreaOfTriangle(9,10))