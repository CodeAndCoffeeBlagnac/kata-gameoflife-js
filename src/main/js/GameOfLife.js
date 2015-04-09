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

module.exports = GameOfLife;
