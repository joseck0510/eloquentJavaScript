function ChessBoard() {
  ChessBoard.prototype.generateOddRow = function () {
    this.oddRow = "# # # # ";
  };

  ChessBoard.prototype.generateEvenRow = function () {
    this.evenRow = " # # # #";
  };

  ChessBoard.prototype.isCounterEven = function (counter) {
    this.currentCounter = counter;
    return this.currentCounter % 2 === 0;
  };

}
