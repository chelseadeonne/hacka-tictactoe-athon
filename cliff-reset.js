//resets gridArray and gameState, clears playarea, and calls createGame //
function resetGame(){
    gridArray = [[0,0,0],[0,0,0],[0,0,0]];
    gameState = 0;
    $(".game_container").innerHTML = '';
    createGame();
}

// increments game attempt counter, resets if clicked //
function incrementCounter(condition){
    if (condition == "reset"){
        gameAttempts = 1;
    }	else {
        gameAttempts++;
    }
    var counters = $("counter")
    for (var i=0; i<counters.length; i++){
        var count = counters[i];
        count.innerHTML = gameAttempts;
    }
}

// reset the game - end of game //

$(".btn-reset").click(function(){
    resetGame();
});

// reset the game - user click //

$(".btn-reset-user").click(function() {
    incrementCounter();
    resetGame();
});