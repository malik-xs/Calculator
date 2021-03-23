/**
 * Calculator Scripts
 */
function Calc() {
}

Calc.prototype.add = function (a, b) {
	return a + b;
};

Calc.prototype.sub = function (a, b) {
	return a - b;
};

var calc = new Calc();

console.log( calc.add(5, 5), calc.sub(15, 5) );
