//resets Array and gameState, clears game_container, and starts newGame //
function resetGame(){
    Array = [[0,0,0],[0,0,0],[0,0,0]];
    gameState = 0;
    $(".game_container").innerHTML = '';
    newGame();
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

// Create game template //
$(document).ready(function(){
    newGame();
    incrementCounter();

    $(document).(function(){
        if ($(this).hasClass("blank")){
            if (gameState == 0){
                this.classList.remove("blank");
                this.classList.add("X");
                $(this).children("img").attr('src',xImg);
                Array[xIndex(this.id)][yIndex(this.id)] = "X";
                gameOver();
                if (gameState == 0) {
                    computerTurn();
                    gameOver();
                }
            }
        }
    });