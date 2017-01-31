function ChessBoard() {
  ChessBoard.prototype.generateOddRow = function () {
    return (this.oddRow = "# # # # ");
  };

  ChessBoard.prototype.generateEvenRow = function () {
    return (this.evenRow = " # # # #");
  };

  ChessBoard.prototype.isCounterEven = function (counter) {
    this.currentCounter = counter;
    return this.currentCounter % 2 === 0;
  };

  ChessBoard.prototype.generateBoard = function () {
    var string = "\n";
    var lineCounter = 1;

    while (lineCounter <= 8) {
      if(this.isCounterEven(lineCounter) === false) {
        string += "# # # # \n";
        lineCounter ++;
      }else if (this.isCounterEven(lineCounter) === true) {
        string += " # # # #\n";
        lineCounter ++;
      }
    }
    return string;
  };
}
