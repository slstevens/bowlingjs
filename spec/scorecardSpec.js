// describe('Scorecard', function() {


// });

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