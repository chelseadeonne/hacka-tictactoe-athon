// change the player //
if (currentPlayer == X){
    currentPlayer = O;
} else {
    currentPlayer = X;
}


// Remove Append //

// $(row_2).append(box_4, box_5, box_6); //
// This needs to target images though, if targets rows then it'll remove gameboard //
// empty cleans out the container //
$('.row_2').empty();
// remove cleans out the whole thing including the container //
$('.row_2').remove();

// Simple Reset Gameboard - This one should work - Use this one//
$('button').click(function () {
    // Whatever 'newgame' is //
    $('div').toggleClass('newgame');
    $('div').removeClass('player_1 player_2');
    x = false;
});


// Other reset ideas //

// Reset example #1 - var i //

tictactoe.reset = function(){
    for(var i = 1; i<10; i++){
        $(i).style.backgroundImage = "";
        tictactoe.board[i] = "";
    }
    tictactoe.nextTurn = true;
    tictactoe.turnCount = 0;
};

// Reset exaample #2 - Initialize the game if needed //

function initialize() {
    resetGame();
    $("btnNewGame").onclick = resetGame;
}

// Reset example #2 - clearing all the cells and player's pattern //
function resetGame() {
    crossPattern = 0;
    noughtPattern = 0;
    crossPlaying = true;
    for (var cellNum = 0; cellNum < NUM_CELLS; cellNum++) {
        var elm = $("cell" + cellNum);
        elm.innerHTML = "&nbsp;";  // Clear content - whatever is within html
        elm.className = "";        // Reset the class
        elm.onmousedown = play;    // Attach mouse click handler
    }
}

// Reset Example #3 - Brute Force Reset //
function playAgain() {
    if (all==0) {
        if(prompt("This will restart the game and clear all the current scores. OK?")) reset();
    }
    if (all>0) reset();
}
function reset() {
    all = 0;
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;
    ok = 0;
    cf = 0;
    gameboard = 9;
    aRandomNumber = 0;
    images = blank;
    images = blank;
    images = blank;
    images = blank;
    images = blank;
    images = blank;
    images = blank;
    images = blank;
    images = blank;
}

// Reset example #4 - if html is written by li/ul //
$("#reset").click(function () {
    $("#game li").text("+");
    $("#game li").removeClass('disable');
    $("#game li").removeClass('o');
    $("#game li").removeClass('x');
    $("#game li").removeClass('btn-primary');
    $("#game li").removeClass('btn-info');
    count = 0
});
