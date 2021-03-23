/**
 * Calculator Scripts
 */
function Calc() {
	this._a = 0;
	this._b = 0;
}

Calc.prototype.set = function (a, b) {
	this._a = a;
	this._b = b;
};

Calc.prototype.add = function (a, b) {
	return this._a + this._b;
};

Calc.prototype.sub = function (a, b) {
	return this._a - this._b;
};

var calc = new Calc();

console.log( calc.add(), calc.sub() ); // 0 0

calc.set(3, 2);

console.log( calc.add(), calc.sub() ); // 5 1
