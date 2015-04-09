describe("GameOfLife", function() {
  var GameOfLife = require('../../../src/main/js/GameOfLife.js');
  var gameOfLife;

  beforeEach(function() {
    gameOfLife = new GameOfLife();
  });

  describe("display", function() {
    it("should return '\n' when given [[]]", function() {
      expect(gameOfLife.display([[]])).toEqual('\n');
    });

    it("should return '\n▓▓░░\n░░▓▓' when given [[1,0],[0,1]]", function() {
      expect(gameOfLife.display([[1,0],[0,1]])).toEqual('\n▓▓░░\n░░▓▓');
   });
  });
});