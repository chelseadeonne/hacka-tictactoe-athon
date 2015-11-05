var title = $("<div class='title'><h1>Tic <span class='red'>-</span> Tac <span class='red'>-</span> <span class='red'>Tarantino</span></h1></div>");
var grid = [];
var r1 = [];
var r2 = [];
var r3 = [];

var c1 = [];
var c2 = [];
var c3 = [];

var d1 = [];
var d2 = [];

var turn = 0;
var size = 3;
var swap = 0;
//dynamic board creation for 3x3 and 5x5

var player_1 = $("<div class='player_1'><h3>Player 1</h3></div>"),
    player_2 = $("<div class='player_2'><h3>Player 2</h3></div>"),
    game_container1 = $("<div class='game_container1'></div>"),
    row_1 = $("<div class='row row_1'></div>"),
    box_1 = $("<div class='box one'></div>"),
    box_2 = $("<div class='box two'></div>"),
    box_3 = $("<div class='box three'></div>"),
    row_2 = $("<div class='row row_2'></div>"),
    box_4 = $("<div class='box four'></div>"),
    box_5 = $("<div class='box five'></div>"),
    box_6 = $("<div class='box six'></div>"),
    row_3 = $("<div class='row row_3'></div>"),
    box_7 = $("<div class='box seven'></div>"),
    box_8 = $("<div class='box eight'></div>"),
    box_9 = $("<div class='box nine'></div>"),
    game_container2 = $("<div class='game_container2'></div>"),
    b2_row1 = $("<div class='b2_row b2_row1'></div>"),
    b2_box1 = $("<div class='b2_box b2_box1'></div>"),
    b2_box2 = $("<div class='b2_box b2_box2'></div>"),
    b2_box3 = $("<div class='b2_box b2_box3'></div>"),
    b2_box4 = $("<div class='b2_box b2_box4'></div>"),
    b2_box5 = $("<div class='b2_box b2_box5'></div>"),
    b2_row2 = $("<div class='b2_row b2_row2'></div>"),
    b2_box6 = $("<div class='b2_box b2_box6'></div>"),
    b2_box7 = $("<div class='b2_box b2_box7'></div>"),
    b2_box8 = $("<div class='b2_box b2_box8'></div>"),
    b2_box9 = $("<div class='b2_box b2_box9'></div>"),
    b2_box10 = $("<div class='b2_box b2_box10'></div>"),
    b2_row3 = $("<div class='b2_row b2_row3'></div>"),
    b2_box11 = $("<div class='b2_box b2_box11'></div>"),
    b2_box12 = $("<div class='b2_box b2_box12'></div>"),
    b2_box13 = $("<div class='b2_box b2_box13'></div>"),
    b2_box14 = $("<div class='b2_box b2_box14'></div>"),
    b2_box15 = $("<div class='b2_box b2_box158'></div>"),
    b2_row4 = $("<div class='b2_row b2_row4'></div>"),
    b2_box16 = $("<div class='b2_box b2_box16'></div>"),
    b2_box17 = $("<div class='b2_box b2_box17'></div>"),
    b2_box18 = $("<div class='b2_box b2_box18'></div>"),
    b2_box19 = $("<div class='b2_box b2_box19'></div>"),
    b2_box20 = $("<div class='b2_box b2_box20'></div>"),
    b2_row5 = $("<div class='b2_row b2_row4'></div>"),
    b2_box21 = $("<div class='b2_box b2_box21'></div>"),
    b2_box22 = $("<div class='b2_box b2_box22'></div>"),
    b2_box23 = $("<div class='b2_box b2_box23'></div>"),
    b2_box24 = $("<div class='b2_box b2_box24'></div>"),
    b2_box25 = $("<div class='b2_box b2_box25'></div>"),
    board_options = $("<div class='board_options'></div>"),
    board_option1 = $("<div class='board_option1'><button>3 Rows</button></div>"),
    board_option2 = $("<div class='board_option2'><button>5 Rows</button></div>"),
    reset = $("<div class='reset'><button>Reset</button></div>");

//document ready function start
$(document).ready(function () {

    $(row_1).append(box_1, box_2, box_3);
    $(row_2).append(box_4, box_5, box_6);
    $(row_3).append(box_7, box_8, box_9);
    $(b2_row1).append(b2_box1, b2_box2, b2_box3, b2_box4, b2_box5);
    $(b2_row2).append(b2_box6, b2_box7, b2_box8, b2_box9, b2_box10);
    $(b2_row3).append(b2_box11, b2_box12, b2_box13, b2_box14, b2_box15);
    $(b2_row4).append(b2_box16, b2_box17, b2_box18, b2_box19, b2_box20);
    $(b2_row5).append(b2_box21, b2_box22, b2_box23, b2_box24, b2_box25);
    $(board_options).append(board_option1, board_option2);
    $(game_container1).append(row_1, row_2, row_3);
    $(game_container2).append(b2_row1, b2_row2, b2_row3, b2_row4, b2_row5, reset);
    $("body").append(title, reset, player_1, board_options, player_2);
    $(board_option1).on('click', function () {
        $(board_options).hide();
        $("body").append(title, reset, player_1, game_container1, player_2);
    });
    $(board_option2).on('click', function () {
        $(board_options).hide();
        $("body").append(title, reset, player_1, game_container2, player_2);
    });
    $(document).on('click', '.box', function () {
        $(this).addClass('marked');


        console.log('hi');
        if (swap % 2 === 0) {
            //player 1 gets to go
            var x = $('<img>').attr('src', 'images/samurai_swords.png');
            $(this).append(x);
            $(this).attr('marked', 'true');


        } else {
            //player 2 gets to go
            var y = $('<img>').attr('src', 'images/meteor_hammer.png');
            $(this).append(y);
        }
        increment();

    });
    $(document).on('click', '.b2_box', function () {
        console.log('hi');
        if (swap % 2 === 0) {
            //player 1 gets to go
            var x = $('<img>').attr('src', 'images/samurai_swords.png');
            $(this).append(x);


        } else {
            //player 2 gets to go
            var y = $('<img>').attr('src', 'images/meteor_hammer.png');
            $(this).append(y);
        }
        increment();
    });

    /*or 5*/
    grid.push(r1, r2, r3, c1, c2, c3, d1, d2);

    $(box_1).on('click', function () {
        if (r1[0] === undefined) {
            if (turn % 2 === 0) {
                r1[0] = "x";
                c1[0] = 'x';
                d1[0] = 'x';
                console.log(r1, c1, d1);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r1[0] = "o";
                c1[0] = 'o';
                d1[0] = 'o';
                console.log(r1, c1, d1);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });

    $(box_2).on('click', function () {
        if (r1[1] === undefined) {
            if (turn % 2 === 0) {
                r1[1] = "x";
                c2[0] = 'x';
                console.log(r1, c2);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r1[1] = "o";
                c2[0] = 'o';
                console.log(r1, c2);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });

    $(box_3).on('click', function () {
        if (r1[2] === undefined) {
            if (turn % 2 === 0) {
                r1[2] = "x";
                c3[0] = 'x';
                d2[0] = 'x';
                console.log(r1, c3, d2);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r1[2] = "o";
                c3[0] = 'o';
                d2[0] = 'o';
                console.log(r1, c3, d2);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });

    $(box_4).on('click', function () {
        if (r2[0] === undefined) {
            if (turn % 2 === 0) {
                r2[0] = "x";
                c1[1] = 'x';
                console.log(r2, c1);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r2[0] = "o";
                c1[1] = 'o';
                console.log(r2, c1);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });

    $(box_5).on('click', function () {
        if (r2[1] === undefined) {
            if (turn % 2 === 0) {
                r2[1] = "x";
                c2[1] = 'x';
                d1[1] = 'x';
                d2[1] = 'x';
                console.log(r2, c2, d1, d2);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r2[1] = "o";
                c2[1] = 'o';
                d1[1] = 'o';
                d2[1] = 'o';
                console.log(r2, c2, d1, d2);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });

    $(box_6).on('click', function () {
        if (r2[2] === undefined) {
            if (turn % 2 === 0) {
                r2[2] = "x";
                c3[1] = 'x';
                console.log(r2, c3);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r2[2] = "o";
                c3[1] = 'o';
                console.log(r2, c3);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });

    $(box_7).on('click', function () {
        if (r3[0] === undefined) {
            if (turn % 2 === 0) {
                r3[0] = "x";
                c1[2] = 'x';
                d2[2] = 'x';
                console.log(r3, c1, d2);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r3[0] = "o";
                c1[2] = 'o';
                d2[2] = 'o';
                console.log(r3, c1, d2);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });

    $(box_8).on('click', function () {
        if (r3[1] === undefined) {
            if (turn % 2 === 0) {
                r3[1] = "x";
                c2[2] = 'x';
                console.log(r3, c2);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r3[1] = "o";
                c2[2] = 'o';
                console.log(r3, c2);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });

    $(box_9).on('click', function () {
        if (r3[2] === undefined) {
            if (turn % 2 === 0) {
                r3[2] = "x";
                c3[2] = 'x';
                d1[2] = 'x';
                console.log(r3, c3, d1);
                turn++;
            }
            else if (turn % 2 !== 0) {
                r3[2] = "o";
                c3[2] = 'o';
                d1[2] = 'o';
                console.log(r3, c3, d1);
                turn++;
            }
            else {
                console.log("error");
            }
        }
        else {
            return;
        }
        check();
    });
    // Reset //
    $('.reset').click(function() {
        $('div').removeClass('.marked');
        boardReset();
    });
});
//end document ready function


Array.prototype.checkforwin = function () {
    for (var i = 0; i < this.length - 1; i++) {
        if (this[i] !== undefined && this.length == size) {
            if (this[i] != this[i + 1]) {
                return false;
            }
            return true;
        }
    }
};

function check() {
    for (i = 0; i < grid.length; i++) {
        if (grid[i].checkforwin() === true) {
            return console.log("yes");
        }
        else {
// return console.log('no');
        }
    }
}
function increment(){
    swap++;
}

// Resets board and images //

function boardReset() {
    for (var i = 0; i < grid.length; i++) {
        grid[i] = [];
        var images = document.getElementsByTagName('img');
        while(images.length>0){
            images[0].parentNode.removeChild(images[0]);
        }

        swap=0;
        r1 = [];
        r2 = [];
        r3 = [];

        c1 = [];
        c2 = [];
        c3 = [];

        d1 = [];
        d2 = [];
    }
}