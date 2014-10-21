function Game() {
	this.scorecard = []
};


Game.prototype.add = function(frame) {
	this.scorecard.push(frame)
};
// Why is this not working!!???
Game.prototype.totalScore = function() {
    var total = 0;
    for(i = 0; i < this.scorecard.length; i++)
    {
       total +=this.scorecard[i].rollOne + this.scorecard[i].rollTwo;
    }
    return total;
}; 

function Frame() {
	this.strikeBonus = null
};

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

// Untested code

Game.prototype.calculateStrikeBonus = function() {
	for(i = 0; i < this.scorecard.length; i++) {
		if (this.scorecard[i].isStrike()) {
			this.scorecard[i].strikeBonus = (this.scorecard[i+1].rollOne + this.scorecard[i+1].rollTwo)
		};
	};
};

