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

$(document).ready(function () {
    $(row_1).append(box_1, box_2, box_3);
    $(row_2).append(box_4, box_5, box_6);
    $(row_3).append(box_7, box_8, box_9);
    $(game_container).append(row_1, row_2, row_3);
    $("body").append(title, player_1, game_container, player_2);
});

var grid = [];
var r1 = [];
var r2 = [];
var r3 = [];

var c1 = [];
var c2 = [];
var c3 = [];

var d1 = [];
var d2 = [];



$(box_1).on('click', function () {
    if (r1[0] === undefined) {
        if (turn === 0) {
            r1[0] = "x";
            c2[0] = 'x';
            d1[0] = 'x';
            console.log(r1, c1, d1);
        }
        else if (turn == 1) {
            r1[0] = "o";
            c1[0] = 'o';
            d1[0] = 'o';
            console.log(r1, c1, d1);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

$(box_2).on('click', function () {
    if (r1[1] === undefined) {
        if (turn === 0) {
            r1[1] = "x";
            c2[0] = 'x';
            console.log(r1, c2, d1);
        }
        else if (turn == 1) {
            r1[1] = "o";
            c2[0] = 'o';
            console.log(r1, c2, d1);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

$(box_3).on('click', function () {
    if (r1[2] === undefined) {
        if (turn === 0) {
            r1[2] = "x";
            c3[0] = 'x';
            d2[0] = 'x';
            console.log(r1, c1, d1);
        }
        else if (turn == 1) {
            r1[2] = "o";
            c3[0] = 'o';
            d2[0] = 'o';
            console.log(r1, c3, d2);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

$(box_4).on('click', function () {
    if (r2[0] === undefined) {
        if (turn === 0) {
            r2[0] = "x";
            c1[1] = 'x';
            console.log(r2, c1, d1);
        }
        else if (turn == 1) {
            r2[0] = "o";
            c1[1] = 'o';
            console.log(r2, c1, d1);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

$(box_5).on('click', function () {
    if (r2[1] === undefined) {
        if (turn === 0) {
            r2[1] = "x";
            c2[1] = 'x';
            d1[1] = 'x';
            d2[1] = 'x';
            console.log(r2, c2, d1, d2);
        }
        else if (turn == 1) {
            r2[1] = "o";
            c2[1] = 'o';
            d1[1] = 'o';
            d2[1] = 'o';
            console.log(r2, c2, d1, d2);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

$(box_6).on('click', function () {
    if (r2[2] === undefined) {
        if (turn === 0) {
            r2[2] = "x";
            c3[1] = 'x';
            console.log(r2, c3);
        }
        else if (turn == 1) {
            r2[2] = "o";
            c3[1] = 'o';
            console.log(r2, c3);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

$(box_7).on('click', function () {
    if (r3[0] === undefined) {
        if (turn === 0) {
            r3[0] = "x";
            c1[2] = 'x';
            d2[2] = 'x';
            console.log(r3, c1, d2);
        }
        else if (turn == 1) {
            r3[0] = "o";
            c1[2] = 'o';
            d2[2] = 'o';
            console.log(r3, c1, d2);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

$(box_8).on('click', function () {
    if (r3[1] === undefined) {
        if (turn === 0) {
            r3[1] = "x";
            c2[2] = 'x';
            console.log(r3, c2);
        }
        else if (turn == 1) {
            r3[1] = "o";
            c2[2] = 'o';
            console.log(r3, c2);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

$(box_9).on('click', function () {
    if (r3[2] === undefined) {
        if (turn === 0) {
            r3[2] = "x";
            c3[2] = 'x';
            d1[2] = 'x';
            console.log(r3, c3, d1);
        }
        else if (turn == 1) {
            r3[2] = "o";
            c3[2] = 'o';
            d1[2] = 'o'
            console.log(r3, c3, d1);
        }
        else {
            console.log("error");
        }
    }
    else {
        return;
    }
});

Array.prototype.checkforwin = function () {

    for (var i = 1; i < this.length; i++) {
        if (this[i] !== this[0])
            return false;
    }
    return true;
};

for (i = 0; i < grid.length; i++) {
    if (grid[i].checkforwin === true) {
        console.log("player " + turn + " wins");
    }
}