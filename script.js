var title = $("<div class='title'><h1>Tic <span class='red'>-</span> Tac <span class='red'>-</span> <span class='red'>Tarantino</span></h1></div>"),
    player_1 = $("<div class='player_1'><h3>Player 1</h3></div>"),
    player_2 = $("<div class='player_2'><h3>Player 2</h3></div>"),
    game_container = $("<div class='game_container'></div>"),
    row_1 = $("<div class='row row_1'></div>"),
    box_1 = $("<div class='box one'></div>"),
    box_2 = $("<div class='box two'></div>"),
    box_3 = $("<div class='box three'></div>"),
    row_2 = $("<div class='row row_2'>"),
    box_4 = $("<div class='box four'></div>"),
    box_5 = $("<div class='box five'></div>"),
    box_6 = $("<div class='box six'></div>"),
    row_3 = $("<div class='row row_3'>"),
    box_7 = $("<div class='box seven'></div>"),
    box_8 = $("<div class='box eight'></div>"),
    box_9 = $("<div class='box nine'></div>");
$(document).ready(function(){
    $(row_1).append(box_1, box_2, box_3);
    $(row_2).append(box_4, box_5, box_6);
    $(row_3).append(box_7, box_8, box_9);
    $(game_container).append(row_1, row_2, row_3);
    $("body").append(title, player_1, game_container, player_2);
    //increment
    $('.box').on('click', function(){
        increment();
        isEven(turn);

    });

});

//switch turns
var player_1 = 0;
var player_2 = 1;
var turn = 0;
function increment(){
    turn++;
}
function checkVictory(){
    //check arrays for win conditions
}
function isEven(turn) {
    if (turn % 2 === 0){
        //player 1 gets to go
        $('img').attr('src') == 'images/samurai_swords.png';


    }else{
        //player 2 gets to go
        $('img').attr('src') == 'images/meteor_hammer.png';
    }

}



