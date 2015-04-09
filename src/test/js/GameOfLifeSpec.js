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

  describe("getNextCellState", function() {
    describe("Rule: Any live cell with fewer than two live neighbours dies", function() {
      it("should return 0 when given 000-010-000", function() {
        expect(gameOfLife.getNextCellState([[0,0,0],[0,1,0],[0,0,0]])).toEqual(0);
      });

      it("should return 0 when given 000-110-000", function() {
        expect(gameOfLife.getNextCellState([[0,0,0],[1,1,0],[0,0,0]])).toEqual(0);
      });
    });

    describe("Any live cell with two or three live neighbours lives on to the next generation", function() {
      it("should return 1 when given 001-011-000", function (){
        expect(gameOfLife.getNextCellState([[0,0,1],[0,1,1],[0,0,0]])).toEqual(1);
      });
      it("should return 1 when given 000-110-011", function (){
        expect(gameOfLife.getNextCellState([[0,0,0],[1,1,0],[0,1,1]])).toEqual(1);
      });

    });

 describe("countNeighbours : count the number of neighbours of a neighbourhood", function() {
      it("should return 0 when given 000-000-000", function(){
        expect([[0,0,0],[0,0,0],[0,0,0]].countNeighbours()).toEqual(0);
      });
      it("should return 0 when given 000-010-000", function(){
        expect([[0,0,0],[0,1,0],[0,0,0]].countNeighbours()).toEqual(0);
      });
       it("should return 1 when given 100-000-000", function(){
                expect([[1,0,0],[0,0,0],[0,0,0]].countNeighbours()).toEqual(1);
       });
       it("should return 1 when given 100-010-000", function(){
                          expect([[1,0,0],[0,1,0],[0,0,0]].countNeighbours()).toEqual(1);
                 });
  it("should return 7 when given 111-011-111", function(){
                          expect([[1,1,1],[0,1,1],[1,1,1]].countNeighbours()).toEqual(7);
                 });



 });




  });

/*  describe("next", function() {
    it("should return '[[]]' when given [[]]", function() {
      var previous = [[]];
      console.log(gameOfLife.display(previous));
      var next = gameOfLife.next(previous);
      console.log(gameOfLife.display(next));
      expect(next).toEqual([[]]);
    });

    it("should return '[[0,0,0], [0,0,0], [0,0,0]]' when given [[0,0,0], [0,1,0], [0,0,1]]", function() {
      var previous = [[0,0,0], [0,1,0], [0,0,1]];
      var expected = [[0,0,0], [0,0,0], [0,0,0]];
      console.log(gameOfLife.display(previous));
      var next = gameOfLife.next(previous);
      console.log(gameOfLife.display(next));
      expect(next).toEqual(expected);
    });

    it("should return '[[0,0,0], [0,1,0], [0,0,0]]' when given [[1,0,0], [0,1,0], [1,0,0]]", function() {
      var previous = [[1,0,0], [0,1,0], [1,0,0]];
      var expected = [[0,0,0], [0,1,0], [0,0,0]];
      console.log(gameOfLife.display(previous));
      var next = gameOfLife.next(previous);
      console.log(gameOfLife.display(next));
      expect(next).toEqual(expected);
    });

    it("should return '[[0,0,0], [0,1,0], [0,0,0]]' when given [[1,0,0], [0,1,0], [0,0,1]]", function() {
      var previous = [[1,0,0], [0,1,0], [0,0,1]];
      var expected = [[0,0,0], [0,1,0], [0,0,0]];
      console.log(gameOfLife.display(previous));
      var next = gameOfLife.next(previous);
      console.log(gameOfLife.display(next));
      expect(next).toEqual(expected);
    });

  });
*/
});
