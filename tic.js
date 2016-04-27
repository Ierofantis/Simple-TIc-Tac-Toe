var human = 'x';
var computer = 'o';
var compMove;
var turn = 0;
var drawcheck;

var a1, a2, a3, b1, b2, b3, c1, c2, c3;
var A1, A2, A3, B1, B2, B3, C1, C2, C3;
var newGame;
var newGame1;
var xWin = false;
var yWin = false;

newGame = function() {

  $('td').one('click', function(event) {
    if (turn == 0) {
      $(this).text(human);
      // drawCheck()
      winh();
      turn == 1;
      compMove();
      // drawCheck()
      winc();

    }
  });
};
newGame1 = function() {

  $('td').on('click', function(event) {
    if (turn == 0) {
      $(this).text(computer);
      // drawCheck()
      winc();
      turn == 1;
      compMove1();
      //   drawCheck()
      winh();

    }
  });
};

//drawCheck=function() {
//var a1 = $('#a1').html();
//var a2 = $('#a2').html();
//var a3 = $('#a3').html();
//var b1 = $('#b1').html();
//var b2 = $('#b2').html();
//var b3 = $('#b3').html();
//var c1 = $('#c1').html();
// var c2 = $('#c2').html();
//var c3 = $('#c3').html();
//  var moveCount = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
// var move=[];
// 
// for (var i = 0; i < moveCount.length; i++) {
///    if ($(this).text(human)||$(this).text(computer)) {
//      move.push(movecount[i])
//     if (move===moveCount){
//   reset()
//   alert("Draw")
///  }
//  }
//  }
//}

compMove = function() {
  var a1 = $('#a1').html();
  var a2 = $('#a2').html();
  var a3 = $('#a3').html();
  var b1 = $('#b1').html();
  var b2 = $('#b2').html();
  var b3 = $('#b3').html();
  var c1 = $('#c1').html();
  var c2 = $('#c2').html();
  var c3 = $('#c3').html();

  if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x"))) {
    $('#a1').text("o");
    turn = 0;
  } else {
    if (a2 == "" && ((a1 == "x" && a3 == "x") || (c2 == "x" && b2 == "x"))) {
      $('#a2').text("o");
      turn = 0;
    } else {
      if (a3 == "" && ((a1 == "x" && a2 == "x") || (c1 == "x" && b2 == "x") || (c3 == "x" && b3 == "x"))) {
        $('#a3').text("o");
        turn = 0;
      } else {
        if (c3 == "" && ((c1 == "x" && c2 == "x") || (a1 == "x" && b2 == "x") || (a3 == "x" && b3 == "x"))) {
          $('#c3').text("o");
          turn = 0;
        } else {
          if (c1 == "" && ((c3 == "x" && c2 == "x") || (a3 == "x" && b2 == "x") || (a1 == "x" && b1 == "x"))) {
            $('#c1').text("o");
            turn = 0;
          } else {
            if (c2 == "" && ((c3 == "x" && c1 == "x") || (a2 == "x" && b2 == "x"))) {
              $('#c2').text("o");
              turn = 0;
            } else {
              if (b1 == "" && ((b3 == "x" && b2 == "x") || (a1 == "x" && c1 == "x"))) {
                $('#b1').text("o");
                turn = 0;
              } else {
                if (b3 == "" && ((a3 == "x" && c3 == "x") || (b2 == "x" && b1 == "x"))) {
                  $('#b3').text("o");
                  turn = 0;
                } else {
                  if (b2 == "" && ((a3 == "x" && c1 == "x") || (c3 == "x" && a1 == "x") || (b3 == "x" && b1 == "x") || (c2 == "x" && a2 == "x"))) {
                    $('#b2').text("o");
                    turn = 0;
                  } else {
                    if (b2 == "") {
                      $('#b2').text("o");
                      turn = 0;

                    } else {
                      if (a1 == "") {
                        $('#a1').text("o");
                        turn = 0;

                      } else {
                        if (c3 == "") {
                          $('#c3').text("o");
                          turn = 0;

                        } else {
                          if (c2 == "") {
                            $('#c2').text("o");
                            turn = 0;

                          } else {
                            if (b1 == "") {
                              $('#b1').text("o");
                              turn = 0;

                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
compMove1 = function() {
  var a1 = $('#a1').html();
  var a2 = $('#a2').html();
  var a3 = $('#a3').html();
  var b1 = $('#b1').html();
  var b2 = $('#b2').html();
  var b3 = $('#b3').html();
  var c1 = $('#c1').html();
  var c2 = $('#c2').html();
  var c3 = $('#c3').html();

  if (a1 == "" && ((a3 == "o" && a2 == "o") || (c3 == "o" && b2 == "o") || (c1 == "o" && b1 == "o"))) {
    $('#a1').text("x");
    turn = 0;
  } else {
    if (a2 == "" && ((a1 == "o" && a3 == "o") || (c2 == "o" && b2 == "o"))) {
      $('#a2').text("x");
      turn = 0;
    } else {
      if (a3 == "" && ((a1 == "o" && a2 == "o") || (c1 == "o" && b2 == "o") || (c3 == "o" && b3 == "o"))) {
        $('#a3').text("x");
        turn = 0;
      } else {
        if (c3 == "" && ((c1 == "o" && c2 == "o") || (a1 == "o" && b2 == "o") || (a3 == "o" && b3 == "o"))) {
          $('#c3').text("x");
          turn = 0;
        } else {
          if (c1 == "" && ((c3 == "o" && c2 == "o") || (a3 == "o" && b2 == "o") || (a1 == "o" && b1 == "o"))) {
            $('#c1').text("x");
            turn = 0;
          } else {
            if (c2 == "" && ((c3 == "o" && c1 == "o") || (a2 == "o" && b2 == "o"))) {
              $('#c2').text("x");
              turn = 0;
            } else {
              if (b1 == "" && ((b3 == "o" && b2 == "o") || (a1 == "o" && c1 == "o"))) {
                $('#b1').text("x");
                turn = 0;
              } else {
                if (b3 == "" && ((a3 == "o" && c3 == "o") || (b2 == "o" && b1 == "o"))) {
                  $('#b3').text("x");
                  turn = 0;
                } else {
                  if (b2 == "" && ((a3 == "o" && c1 == "o") || (c3 == "o" && a1 == "o") || (b3 == "o" && b1 == "o") || (c2 == "o" && a2 == "o"))) {
                    $('#b2').text("x");
                    turn = 0;
                  } else {
                    if (b2 == "") {
                      $('#b2').text("x");
                      turn = 0;

                    } else {
                      if (a1 == "") {
                        $('#a1').text("x");
                        turn = 0;

                      } else {
                        if (c3 == "") {
                          $('#c3').text("x");
                          turn = 0;

                        } else {
                          if (c2 == "") {
                            $('#c2').text("x");
                            turn = 0;

                          } else {
                            if (b1 == "") {
                              $('#b1').text("x");
                              turn = 0;

                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
winh = function() {
  var a1 = $('#a1').html();
  var a2 = $('#a2').html();
  var a3 = $('#a3').html();
  var b1 = $('#b1').html();
  var b2 = $('#b2').html();
  var b3 = $('#b3').html();
  var c1 = $('#c1').html();
  var c2 = $('#c2').html();
  var c3 = $('#c3').html();
  var a = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
  var wincomp = [
    [a1, a2, a3],
    [b1, b2, b3],
    [c1, c2, c3],
    [a1, b1, c1],
    [a2, b2, c2],
    [a3, b3, c3],
    [a1, b2, c3],
    [a3, b2, c1]
  ];
  var win = [];

  for (var i in wincomp) {
    if ($(this).text(human)) {
      win.push(human)
      if (JSON.stringify(win) === JSON.stringify(wincomp[0]) || (JSON.stringify(win) === JSON.stringify(wincomp[1])) || (JSON.stringify(win) === JSON.stringify(wincomp[2])) || (JSON.stringify(win) === JSON.stringify(wincomp[3])) || (JSON.stringify(win) === JSON.stringify(wincomp[4])) || (JSON.stringify(win) === JSON.stringify(wincomp[5])) || (JSON.stringify(win) === JSON.stringify(wincomp[6])) || (JSON.stringify(win) === JSON.stringify(wincomp[7]))) {
        xWin = true;
        alert("x won")
        reset()
      }
    }

  }

}

winc = function() {
  var a1 = $('#a1').html();
  var a2 = $('#a2').html();
  var a3 = $('#a3').html();
  var b1 = $('#b1').html();
  var b2 = $('#b2').html();
  var b3 = $('#b3').html();
  var c1 = $('#c1').html();
  var c2 = $('#c2').html();
  var c3 = $('#c3').html();
  var a = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
  var wincomp = [
    [a1, a2, a3],
    [b1, b2, b3],
    [c1, c2, c3],
    [a1, b1, c1],
    [a2, b2, c2],
    [a3, b3, c3],
    [a1, b2, c3],
    [a3, b2, c1]
  ];
  var win = [];

  for (var i in wincomp) {
    if ($(this).text('o')) {
      win.push('o')
      if (JSON.stringify(win) === JSON.stringify(wincomp[0]) || (JSON.stringify(win) === JSON.stringify(wincomp[1])) || (JSON.stringify(win) === JSON.stringify(wincomp[2])) || (JSON.stringify(win) === JSON.stringify(wincomp[3])) || (JSON.stringify(win) === JSON.stringify(wincomp[4])) || (JSON.stringify(win) === JSON.stringify(wincomp[5])) || (JSON.stringify(win) === JSON.stringify(wincomp[6])) || (JSON.stringify(win) === JSON.stringify(wincomp[7]))) {
        yWin = true;
        alert("o won")
        reset()
      }
    }
  }
}

reset = function() {

  a1 = $('#a1').text("");
  b1 = $('#b1').text("");
  c1 = $('#c1').text("");
  a2 = $('#a2').text("");
  b2 = $('#b2').text("");
  c2 = $('#c2').text("");
  a3 = $('#a3').text("");
  b3 = $('#b3').text("");
  c3 = $('#c3').text("");

  xWin = false;
  yWin = false;

  document.getElementById("td").reset();

}