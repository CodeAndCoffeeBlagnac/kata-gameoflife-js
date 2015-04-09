function GameOfLife () {}

GameOfLife.prototype.display = function(matrix) {
    var displayCell = function (cell) {
        return (cell === 1)?'▓▓':'░░';
    };

    var displayLine = function(line) {
        return line.map(displayCell).join('');
    };

    return '\n'+matrix.map(displayLine).join('\n');
};

GameOfLife.prototype.getNextCellState = function(neighbourhood) {

    if(neighbourhood.countNeighbours() >= 2 ) return 1;
    return 0;
};


GameOfLife.prototype.next = function(matrix) {


    /*if(JSON.stringify(matrix) === JSON.stringify([[]])) return matrix;
    if(JSON.stringify(matrix) === JSON.stringify([[1,0,0], [0,1,0], [1,0,0]])) return [[0,0,0], [0,1,0], [0,0,0]];
    return [[0,0,0], [0,0,0], [0,0,0]];*/
};

module.exports = GameOfLife;



 Array.prototype.countNeighbours = function(){
    var count = function(accumulator, value){
                      return accumulator + value;
               };
    var countLivingCells = this.map(function(line){
                               return line.reduce(count,0)
                        }).reduce(count,0);

    var isCenterCellAlive = this[1][1];
    return  countLivingCells - (isCenterCellAlive ? 1 : 0);

}
