A javascript bowling score calculator. 

My problems:
- Should the strike bonus and spare bonus be automatically calculated. If so, how could this be achieved?
- Should there be a 'Game setup' method?
- I am not sure how to implement the tenth frame. 
- calculateStrikeBonus and calculateSpareBonus methods don't work correctly as they look through the following two frmaes (and the game contains a set number of frames(10))
-- Approach 1) Create a new tenth frame class, and use inheritance to inherit frame methods. 
--Approach 2) Create a new method within the Game class, or edit one of the existing methods using an if statement. .