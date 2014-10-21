describe('Scorecard', function() {

	var scorecard;

	beforeEach(function() {
		
		frame = new Frame;
		game = new Game;

	});
	
	it('can add a new frame', function() {
		game.add(frame);
		expect(game.scorecard.length).toEqual(1);
	});

	it('knows the score of a frame', function() {
		frame.score(3, 4);
		game.add(frame);
		expect(game.scorecard[0].rollOne).toEqual(3);
		expect(game.scorecard[0].rollTwo).toEqual(4);
	});

	it('should know the total game score', function() {
		frame1 = new Frame;
		frame2 = new Frame;
		frame1.score(3, 4);
		frame2.score(5, 5);
		game.add(frame1)
		game.add(frame2)
		expect(game.totalScore()).toEqual(17)
	});

	xit('should know award a strike bonus', function() {
		frame1 = new Frame;
		frame2 = new Frame;
		frame1.score(10, 0);
		frame2.score(5, 5);
		game.add(frame1)
		game.add(frame2)
		expect(game.totalScore()).toEqual(30)		
	});

	it('should know a strike bonus', function() {
		frame1 = new Frame;
		frame2 = new Frame;
		frame1.score(10, 0);
		frame2.score(5, 5);
		game.add(frame1)
		game.add(frame2)		
		expect(game.scorecard[0].isStrike()).toBe(true)
	});

	it('should allow a frame to have a strike bonus', function() {
		frame1 = new Frame;
		frame2 = new Frame;
		frame1.score(10, 0)
		frame2.score(2, 5)
		game.add(frame1)
		game.add(frame2)
		game.calculateStrikeBonus()
		expect(game.scorecard[0].strikeBonus).toEqual(7)
	});

	it('should not add a score bonus if no strike', function() {
		frame1 = new Frame;
		frame2 = new Frame;
		frame3 = new Frame;
		frame1.score(10, 0)
		frame2.score(2, 5)
		frame3.score(1, 0)
		game.add(frame1)
		game.add(frame2)
		game.add(frame3)
		expect(game.scorecard[1].strikeBonus).toEqual(null)
	});

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

// // should have 10 frames
// // Each frame should have a maximum of two rolls
// // Each frame has a maximum of X points
// // A spare
// // A strike

// // Perfect Game

// // - Frame 1: 10 + (10 from Frame 2 and 10 from Frame 3) = 30
// // - Frame 2: 10 + (10 from Frame 3 and 10 from Frame 4) = 30
// // - Frame 3: 10 + (10 from Frame 4 and 10 from Frame 5) = 30 
// // - Frame 4: 10 + (10 from Frame 5 and 10 from Frame 6) = 30
// // - Frame 5: 10 + (10 from Frame 6 and 10 from Frame 7) = 30
// // - Frame 6: 10 + (10 from Frame 7 and 10 from Frame 8) = 30
// // - Frame 7: 10 + (10 from Frame 8 and 10 from Frame 9) = 30
// // - Frame 8: 10 + (10 from Frame 9 and 10 from Frame 10) = 30
// // - Frame 9: 10 + (10 from Frame 10 and 10 from Roll 2 of Frame 10) = 30
// // - Frame 10: 10 + (10 from Roll 2 and 10 from Roll 3) = 30


// describe('Scorecard', function() {

// 	it('should have ten frames', function() {
// 		scorecard = new Scorecard;
// 		expect(scorecard.frames.length).toEqual(10);
// 	});

// 	xit('should have a total score', function() {
// 		scorecard = new Scorecard;
// 		frame1 = new Frame;
// 		frame2 = new Frame;
// 		frame1.score = 9
// 		frame2.score = 8
// 		expect(scorecard.totalScore).toEqual(17)
// 	})

// });

// describe('Frame', function() {

// 	xit('should calculate a score after a roll', function() {
// 		frame1 = new Frame;
// 		frame1.firstRoll(3);
// 		expect(frame1.score).toEqual(3);
// 	});

// it should have 2 throws
// it should calculate the framescore

// thoughts:

// it should push the score from a roll into the frame score array.
// it should then total the scores that are into the frame score array by summing the elements of the array
// the scorecard should sum up all of the arrays 
// if a first roll is less than 10, then who is 

// });