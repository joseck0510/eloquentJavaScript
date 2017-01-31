describe("ChessBoard", function() {
  var chessboard;

  beforeEach(function() {
    chessboard = new ChessBoard();
  });

  it("should return an odd numbered row pattern '# # # # ' of the chessboard", function() {
    chessboard.generateOddRow();
    expect(chessboard.oddRow).toEqual("# # # # ");
  });

  it("should return and even numbered row pattern ' # # # #' of the chessboard", function() {
    chessboard.generateEvenRow();
    expect(chessboard.evenRow).toEqual(" # # # #");
  });

  it("should know when a row is odd", function() {
    expect(chessboard.isCounterEven(1)).toEqual(false);
  });

  it("should know when a row is even", function() {
    expect(chessboard.isCounterEven(2)).toEqual(true);
  });

  it("should generate an 8x8 grid, if passed an argument of 8", function () {
    expect(chessboard.generateBoard()).toEqual("\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n");
  });

  it("should generate an 2x2 grid, if passed an argument of 2", function () {
    expect(chessboard.generateBoard()).toEqual("\n# # \n # #\n");
  });

});
