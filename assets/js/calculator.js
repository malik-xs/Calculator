/**
 * Calculator Scripts
 */
function Calc() {
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

calc.set(3, 2);

console.log( calc.add(), calc.sub() );
