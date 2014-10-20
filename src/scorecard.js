// function Scorecard() {};

function Frame() {};

Frame.prototype.score = function(first_roll, second_roll) {
	this.rollOne = first_roll;
	this.rollTwo = second_roll;
	return this
};

Frame.prototype.isStrike = function() {
	return (this.rollOne === 10);
};

Frame.prototype.isSpare = function() {
	return (this.rollOne + this.rollTwo === 10) && (this.rollOne !== 10)
};
// function Scorecard () {

// 	this.frames = [
// 		frame1 = new Frame(this),
// 		frame2 = new Frame(this),
// 		frame3 = new Frame(this),
// 		frame4 = new Frame(this),
// 		frame5 = new Frame(this),
// 		frame6 = new Frame(this),
// 		frame7 = new Frame(this),
// 		frame8 = new Frame(this),
// 		frame9 = new Frame(this),
// 		frame10 = new Frame(this)
// 	]

// 	// this.totalScore = var sum = times.reduce(function(a, b) { return a + b });
// };

// function Frame () {
// };

// Frame.prototype.firstRoll = function(number) {

// };

// Frame.prototype.score = function(first_argument) {
// 	// body...
// };