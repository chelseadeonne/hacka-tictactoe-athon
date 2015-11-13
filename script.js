var title = $("<div class='title'><h1>Tic - Tac - <span class='black'>Tarantino</span></h1></div>");

var turn = 0;

var size;
var swap = 0;

var theme_music = true;

//dynamic board creation for 3x3 and 5x5
var win = $('<h1>');
var lose = $('<img>').attr('src', 'images/Blood-Slash.png').addClass('tally');
var player_1 = $("<div class='player_1'><h2>Kiddo</h2></div>"),
    player_2 = $("<div class='player_2'><h2>O-Ren Ishii</h2></div>"),
    game_container1 = $("<div class='game_container1'></div>"),
    row_1 = $("<div class='row row_1'></div>"),
    box_1 = $("<div class='box one col1 dia1'></div>"),
    box_2 = $("<div class='box two col2'></div>"),
    box_3 = $("<div class='box three col3 dia2'></div>"),
    row_2 = $("<div class='row row_2'></div>"),
    box_4 = $("<div class='box four col1'></div>"),
    box_5 = $("<div class='box five col2 dia1 dia2'></div>"),
    box_6 = $("<div class='box six col3'></div>"),
    row_3 = $("<div class='row row_3'></div>"),
    box_7 = $("<div class='box seven col1 dia2'></div>"),
    box_8 = $("<div class='box eight col2'></div>"),
    box_9 = $("<div class='box nine col3 dia1'></div>"),
    game_container2 = $("<div class='game_container2'></div>"),
    b2_row1 = $("<div class='b2_row b2_row1'></div>"),
    b2_box1 = $("<div class='b2_box b2_box1 b2_col1 b2_dia1'></div>"),
    b2_box2 = $("<div class='b2_box b2_box2 b2_col2'></div>"),
    b2_box3 = $("<div class='b2_box b2_box3 b2_col3'></div>"),
    b2_box4 = $("<div class='b2_box b2_box4 b2_col4'></div>"),
    b2_box5 = $("<div class='b2_box b2_box5 b2_col5 b2_dia2'></div>"),
    b2_row2 = $("<div class='b2_row b2_row2'></div>"),
    b2_box6 = $("<div class='b2_box b2_box6 b2_col1'></div>"),
    b2_box7 = $("<div class='b2_box b2_box7 b2_col2 b2_dia1'></div>"),
    b2_box8 = $("<div class='b2_box b2_box8 b2_col3'></div>"),
    b2_box9 = $("<div class='b2_box b2_box9 b2_col4 b2_dia2'></div>"),
    b2_box10 = $("<div class='b2_box b2_box10 b2_col5'></div>"),
    b2_row3 = $("<div class='b2_row b2_row3'></div>"),
    b2_box11 = $("<div class='b2_box b2_box11 b2_col1'></div>"),
    b2_box12 = $("<div class='b2_box b2_box12 b2_col2'></div>"),
    b2_box13 = $("<div class='b2_box b2_box13 b2_col3 b2_dia1 b2_dia2'></div>"),
    b2_box14 = $("<div class='b2_box b2_box14 b2_col4'></div>"),
    b2_box15 = $("<div class='b2_box b2_box15 b2_col5'></div>"),
    b2_row4 = $("<div class='b2_row b2_row4'></div>"),
    b2_box16 = $("<div class='b2_box b2_box16 b2_col1'></div>"),
    b2_box17 = $("<div class='b2_box b2_box17 b2_col2 b2_dia2'></div>"),
    b2_box18 = $("<div class='b2_box b2_box18 b2_col3'></div>"),
    b2_box19 = $("<div class='b2_box b2_box19 b2_col4 b2_dia1'></div>"),
    b2_box20 = $("<div class='b2_box b2_box20 b2_col5'></div>"),
    b2_row5 = $("<div class='b2_row b2_row4'></div>"),
    b2_box21 = $("<div class='b2_box b2_box21 b2_col1 b2_dia2'></div>"),
    b2_box22 = $("<div class='b2_box b2_box22 b2_col2'></div>"),
    b2_box23 = $("<div class='b2_box b2_box23 b2_col3'></div>"),
    b2_box24 = $("<div class='b2_box b2_box24 b2_col4'></div>"),
    b2_box25 = $("<div class='b2_box b2_box25 b2_col5 b2_dia1'></div>"),
    board_options = $("<div class='board_options'></div>"),
    board_option1 = $("<div class='board_option1'><button>3 Rows</button></div>"),
    board_option2 = $("<div class='board_option2'><button>5 Rows</button></div>"),
    reboot = $("<div class='reboot'><button class='reset'>Reset</button><button id='theme_music'>Stop Music</button></div>");

//==============increment to swap between players===============//

function increment() {
    swap++;
    board.turn_indicator =
}

//============== Resets board and images ============= //

function boardReset() {
    for (var i = 0; i < grid.length; i++) {
        grid[i] = [];
        $('div').removeClass('marked');
        $(player_1).find('h1').remove();
        $(player_2).find('h1').remove();
        $(player_1).find('img').remove();
        $(player_2).find('img').remove();
        $(".box").removeClass("x").removeClass("o").removeClass("marked").addClass("black_background").removeClass("yellow_background");
        $(".b2_box").removeClass("x").removeClass("o").removeClass("marked").addClass("black_background").removeClass("yellow_background");
        $("body").find(game_container1).hide();
        $("body").find(game_container2).hide();
        $(board_options).show();
        $("body").append(title, reboot, player_1, board_options, player_2);

        swap = 0;
        turn = 0;
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
//***********************************************OOP Board*******************************************//
var board = {
        this.number_of_cards = 9, //count down for tie.
    this
.
turn_indicator = null; //if player one clicks, that has a property that can be sent to the board.

}

//***********************************************WIN CONDITION***************************************//
function win_condition_check() {
    for (var x in player1) {
        if (player1[x] === 3) {
            alert("player 1 wins!");
        }
    }

    for (var x in player2) {
        if (player2[x] === 3) {
            alert("player 2 wins!");
        }
    }
}

//************************************************CONSTRUCTOR*****************************************//
function Player(player_number) {
    this.number = player_number;
    this.row1 = 0;
    this.row2 = 0;
    this.row3 = 0;
    this.col1 = 0;
    this.col2 = 0;
    this.col3 = 0;
    this.diag1 = 0;
    this.diag2 = 0;
        this.row1add = function () {
            this.row1++;
        };
        this.row2add = function () {
            this.row2++;
        };
        this.row3add = function () {
            this.row3++;
        };
        this.col1add = function () {
            this.col1++;
        };
        this.col2add = function () {
            this.col2++;
        };
        this.col3add = function () {
            this.col3++;
        };
        this.diag1add = function () {
            this.diag1++;
        };
        this.diag2add = function () {
            this.diag2++;
        };

}

//===============document ready function start==============//

$(document).ready(function () {

//=================dynamic board creation ============//

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
    $(game_container2).append(b2_row1, b2_row2, b2_row3, b2_row4, b2_row5);
    $("body").append(title, reboot, player_1, board_options, player_2);

//=================3x3 Board Creation==================//

    $(board_option1).on('click', function () {
        grid.push(r1, r2, r3, c1, c2, c3, d1, d2);
        $(board_options).hide();
        $(game_container1).show();
        $("body").append(title, reboot, player_1, game_container1, player_2);
        $(".box").addClass("black_background");
        size = 3;
        $(player_1).find('h1').remove();
        $(player_2).find('h1').remove();
        $(player_1).find('img').remove();
        $(player_2).find('img').remove();
    });
//============5x5 board Creation============//
    $(board_option2).on('click', function () {
        grid.push(r1, r2, r3, r4, r5, c1, c2, c3, c4, c5, d1, d2);
        $(board_options).hide();
        $(game_container2).show();
        $("body").append(title, reboot, player_1, game_container2, player_2);
        $(".b2_box").addClass("black_background");
        size = 5;
        $(player_1).find('h1').remove();
        $(player_2).find('h1').remove();
        $(player_1).find('img').remove();
        $(player_2).find('img').remove();
    });

//=================Image Append 3x3 board==================//
    $(document).on('click', '.box', function () {
        $(this).addClass('marked');
        console.log('hi');
        if (swap % 2 === 0) {
            //player 1 gets to go
            var x = $('<img>').attr('src', 'images/samurai_swords.png');
            //$(this).append(x);
            sword.play();
            $(this).addClass("x").removeClass("black_background").addClass("yellow_background");
            $(this).attr('marked', 'true');
        } else {
            //player 2 gets to go
            var y = $('<img>').attr('src', 'images/meteor_hammer.png');
            meteor_hammer.play();
            //$(this).append(y);
            $(this).addClass("o");
        }
        increment();
    });

//============Append Image 5x5 board============//

    $(document).on('click', '.b2_box', function () {
        $(this).addClass('marked');
        console.log('hi');
        if (swap % 2 === 0) {
            //player 1 gets to go
            //var x = $('<img>').attr('src', 'images/samurai_swords.png');
            //$(this).append(x);
            sword.play();
            $(this).addClass("x").addClass("marked").removeClass("black_background").addClass("yellow_background");
            var x = $('<img>').attr('src', 'images/samurai_swords.png');

        } else {
            //player 2 gets to go
            meteor_hammer.play();
            var y = $('<img>').attr('src', 'images/meteor_hammer.png');
            //$(this).append(y);
            $(this).addClass("o");
        }
        increment();
    });

//==================Win condition creation================//

//=================3x3 win condition=====================//


    $(row_1).on('click', '.box', function () {
        if (swap % 2 === 0) {
            player1.row1_add();
        }
        else{
            player2,row1_add();
        }
        win_condition_check();
    });

    $(row_2).on('click', '.box', function () {
        if (swap % 2 === 0) {
            player1.row2_add();
        }
        else{
            player2,row2_add();
        }
        win_condition_check();
    });

    $(row_3).on('click', '.box', function () {
        if (swap % 2 === 0) {
            player1.row3_add();
        }
        else{
            player2,row3_add();
        }
        win_condition_check();
    });

    $(document).on('click', '.col1', function () {
        if (swap % 2 === 0) {
            player1.col1_add();
        }
        else{
            player2,col1_add();
        }
        win_condition_check();
    });

    $(document).on('click', '.col2', function () {
        if (swap % 2 === 0) {
            player1.col2_add();
        }
        else{
            player2,col2_add();
        }
        win_condition_check();
    });

    $(document).on('click', '.col3', function () {
        if (swap % 2 === 0) {
            player1.col3_add();
        }
        else{
            player2,col3_add();
        }
        win_condition_check();
    });

    $(document).on('click', '.dia1', function () {
        if (swap % 2 === 0) {
            player1.diag1_add();
        }
        else{
            player2,diag1_add();
        }
        win_condition_check();
    });

    $(document).on('click', '.dia2', function () {
        if (swap % 2 === 0) {
            player1.diag2_add();
        }
        else{
            player2,diag2_add();
        }
        win_condition_check();
    });

//=========5x5 win condition =============//

    $(b2_row1).on('click', '.b2_box', function () {
        if (swap % 2 === 0) {
            grid[0].push(1);
        }
        else(grid[0].push(-1));
        check();
    });
    $(b2_row2).on('click', '.b2_box', function () {
        if (swap % 2 === 0) {
            grid[1].push(1);
        }
        else(grid[1].push(-1));
        check();
    });
    $(b2_row3).on('click', '.b2_box', function () {
        if (swap % 2 === 0) {
            grid[2].push(1);
        }
        else(grid[2].push(-1));
        check();
    });
    $(b2_row4).on('click', '.b2_box', function () {
        if (swap % 2 === 0) {
            grid[3].push(1);
        }
        else(grid[3].push(-1));
        check();
    });
    $(b2_row5).on('click', '.b2_box', function () {
        if (swap % 2 === 0) {
            grid[4].push(1);
        }
        else(grid[4].push(-1));
        check();
    });
    $(document).on('click', '.b2_col1', function () {
        if (swap % 2 === 0) {
            grid[5].push(1);
        }
        else(grid[5].push(-1));
        check();
    });
    $(document).on('click', '.b2_col2', function () {
        if (swap % 2 === 0) {
            grid[6].push(1);
        }
        else(grid[6].push(-1));
        check();
    });
    $(document).on('click', '.b2_col3', function () {
        if (swap % 2 === 0) {
            grid[7].push(1);
        }
        else(grid[7].push(-1));
        check();
    });
    $(document).on('click', '.b2_col4', function () {
        if (swap % 2 === 0) {
            grid[8].push(1);
        }
        else(grid[8].push(-1));
        check();
    });
    $(document).on('click', '.b2_col5', function () {
        if (swap % 2 === 0) {
            grid[9].push(1);
        }
        else(grid[9].push(-1));
        check();
    });
    $(document).on('click', '.b2_dia1', function () {
        if (swap % 2 === 0) {
            grid[10].push(1);
        }
        else(grid[10].push(-1));
        check();
    });
    $(document).on('click', '.b2_dia2', function () {
        if (swap % 2 === 0) {
            grid[11].push(1);
        }
        else(grid[11].push(-1));
        check();
    });

//========= Reset ==============//

    $('.reset').click(function () {
        $('.box').removeClass('marked');
        $('.b2_box').removeClass('marked');
        boardReset();
    });
//========= Theme Music ==============//

    kill_bill_mix.play();

    $("#theme_music").on('click', function () {
        if (theme_music === true) {
            theme_music = false;
            kill_bill_mix.pause();
            $("#theme_music").html("Play Music")
        } else {
            kill_bill_mix.play();
            $("#theme_music").html("Stop Music");
            theme_music = true;
        }
    });

});
//=====End Document Ready Function =======//
