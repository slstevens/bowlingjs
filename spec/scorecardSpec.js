describe('Scorecard', function() {

	var scorecard;

	beforeEach(function() {
		
		frame = new Frame;
		frame1 = new Frame;
		frame2 = new Frame;
		frame3 = new Frame;
		game = new Game;

	});
	
	xit('can add a new frame', function() {
		game.add(frame);
		expect(game.scorecard.length).toEqual(1);
	});

	xit('knows the score of a frame', function() {
		frame.score(3, 4);
		game.add(frame);
		expect(game.scorecard[0].rollOne).toEqual(3);
		expect(game.scorecard[0].rollTwo).toEqual(4);
	});

	// move this
	// it('knows the total frame score', function() {
	// 	frame1 = new Frame;
	// 	frame2 = new Frame;
	// 	frame1.score(10, 0);
	// 	frame2.score(5, 4);
	// 	game.add(frame1)
	// 	game.add(frame2)
	// 	game.calculateStrikeBonus()
	// 	game.calculateSpareBonus()
	// 	expect(game.scorecard[0].frameScore()).toEqual(28)
	// });

	xit('should know the total game score', function() {
		frame1.score(3, 4);
		frame2.score(5, 5);
		game.add(frame1)
		game.add(frame2)
		expect(game.totalScore()).toEqual(17)
	});

	it('should know a strike', function() {
		frame1.score(10, 0);
		frame2.score(5, 5);
		game.add(frame1)
		game.add(frame2)		
		expect(game.scorecard[0].isStrike()).toBe(true)
	});

	it('should allow a frame to have a strike bonus', function() {
		frame1.score(10, 0)
		frame2.score(2, 5)
		game.add(frame1)
		game.add(frame2)
		game.calculateStrikeBonus()
		expect(game.scorecard[0].strikeBonus).toEqual(7)
	});

	it('should not add a strike bonus if no strike', function() {
		frame1.score(10, 0)
		frame2.score(2, 5)
		frame3.score(1, 0)
		game.add(frame1)
		game.add(frame2)
		game.add(frame3)
		game.calculateStrikeBonus()
		expect(game.scorecard[1].strikeBonus).toEqual(null)
	});

	it('should do the correct scoring of a strike bonus for 2 consecutive strikes', function() {
		frame1.score(10, 0)
		frame2.score(10, 0)
		frame3.score(5, 0)
		game.add(frame1)
		game.add(frame2)
		game.add(frame3)
		game.calculateStrikeBonus()
		expect(game.scorecard[0].strikeBonus).toEqual(15)
	});

	it('should know a spare', function() {
		frame1.score(5, 5);
		frame2.score(5, 5);
		game.add(frame1)
		game.add(frame2)		
		expect(game.scorecard[0].isSpare()).toBe(true)
	});

	it('should allow a frame to have a spare bonus', function() {
		frame1.score(5, 5)
		frame2.score(2, 5)
		game.add(frame1)
		game.add(frame2)
		game.calculateSpareBonus()
		expect(game.scorecard[0].spareBonus).toEqual(2)
	});

	// it('should allow the tenth frame to have another frame', function() {
	// 	expect(game.scorecard[9] to have two extra frames potentially - depending on number of strikes
	// 	but then have to put in a clause into calculateStrikebonus if scorecard [9] is a strike 
	// if frame10.isStrike() then add a roll
	// 	Maybe also create a game.setup method, which just sets up the frames and adds them to the game.
	// });

});

describe('Frame', function() {

	var frame;

	beforeEach(function() {

		frame = new Frame;
		
	});

	it('should contain two scores', function() {
		frame.score(4, 2)
		expect(frame.rollOne).toEqual(4)
		expect(frame.rollTwo).toEqual(2)
	});

	it('score can be a strike', function() {
		frame.score(10, 0)
		expect(frame.isStrike()).toBe(true)
	});

	it('knows if not a strike', function() {
		frame.score(5,5)
		expect(frame.isStrike()).toBe(false)
	});

	it('score can be a spare', function() {
		frame.score(5,5);
		expect(frame.isSpare()).toBe(true)
	});

	it('knows if not a spare', function() {
		frame.score(4,5);
		expect(frame.isSpare()).toBe(false)
	});

	it('knows that a strike is not a spare', function() {
		frame.score(10,0);
		expect(frame.isSpare()).toBe(false);
	});

	it('should have a strike bonus', function() {
		expect(frame.strikeBonus).toEqual(null)
	});



});