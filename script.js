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
var r4 = [];
var r5 = [];

var c1 = [];
var c2 = [];
var c3 = [];
var c4 = [];
var c5 = [];

var d1 = [];
var d2 = [];

var turn = 0;
var size = 3;
/*or 5*/
//grid.push(r1, r2, r3, c1, c2, c3, d1, d2);

//for 5x5
grid.push(r1,r2,r3,r4,r5,c1,c2,c3,c4,c5,d1,d2);

/*
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
*/
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
//***************************************************************5x5 code*******************************//

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
            console.log(r1, c3, d2);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r1[2] = "o";
            c3[0] = 'o';
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
    if (r1[3] === undefined) {
        if (turn % 2 === 0) {
            r1[3] = "x";
            c4[0] = 'x';
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
    if (r1[4] === undefined) {
        if (turn % 2 === 0) {
            r1[4] = "x";
            c5[0] = 'x';
            d2[0] = 'x';
            console.log(r2, c2, d1, d2);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r1[4] = "o";
            c5[0] = 'o';
            d2[0] = 'o';
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
    if (r2[0] === undefined) {
        if (turn % 2 === 0) {
            r2[0] = "x";
            c1[1] = 'x';
            console.log(r2, c3);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r2[0] = "o";
            c1[1] = 'o';
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
    if (r2[1] === undefined) {
        if (turn % 2 === 0) {
            r2[1] = "x";
            c2[1] = 'x';
            d1[2] = 'x';
            console.log(r3, c1, d2);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r2[1] = "o";
            c2[1] = 'o';
            d1[2] = 'o';
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
    if (r2[2] === undefined) {
        if (turn % 2 === 0) {
            r2[2] = "x";
            c3[1] = 'x';
            console.log(r3, c2);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r2[2] = "o";
            c3[1] = 'o';
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
    if (r2[3] === undefined) {
        if (turn % 2 === 0) {
            r2[3] = "x";
            c4[1] = 'x';
            d2[2] = 'x';
            console.log(r3, c3, d1);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r2[3] = "o";
            c4[1] = 'o';
            d2[2] = 'o';
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

$(box_10).on('click', function () {
    if (r2[4] === undefined) {
        if (turn % 2 === 0) {
            r2[4] = "x";
            c5[1] = 'x';
            console.log(r2, c5);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r2[4] = "o";
            c5[1] = 'o';
            console.log(r2, c5);
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

$(box_11).on('click', function () {
    if (r3[0] === undefined) {
        if (turn % 2 === 0) {
            r3[0] = "x";
            c1[2] = 'x';
            console.log(r3, c1);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r3[0] = "o";
            c1[2] = 'o';
            console.log(r3, c1);
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

$(box_12).on('click', function () {
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

$(box_13).on('click', function () {
    if (r3[2] === undefined) {
        if (turn % 2 === 0) {
            r3[2] = "x";
            c3[2] = 'x';
            d1[2] = 'x';
            d2[2] = 'x';
            console.log(r3, c3, d1, d2);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r3[2] = "o";
            c3[2] = 'o';
            d1[2] = 'o';
            d2[2] = 'o';
            console.log(r3, c3, d1, d2);
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

$(box_14).on('click', function () {
    if (r3[3] === undefined) {
        if (turn % 2 === 0) {
            r3[3] = "x";
            c4[2] = 'x';
            console.log(r3, c4);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r3[3] = "o";
            c4[2] = 'o';
            console.log(r3, c4);
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

$(box_15).on('click', function () {
    if (r3[4] === undefined) {
        if (turn % 2 === 0) {
            r3[4] = "x";
            c5[2] = 'x';
            console.log(r3, c5);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r3[4] = "o";
            c5[2] = 'o';
            console.log(r3, c5);
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

$(box_16).on('click', function () {
    if (r4[0] === undefined) {
        if (turn % 2 === 0) {
            r4[0] = "x";
            c1[3] = 'x';
            console.log(r4, c1);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r4[0] = "o";
            c1[3] = 'o';
            console.log(r4, c1);
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

$(box_17).on('click', function () {
    if (r4[1] === undefined) {
        if (turn % 2 === 0) {
            r4[1] = "x";
            c2[3] = 'x';
            d2[3] = 'x';
            console.log(r4, c2, d2);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r4[1] = "o";
            c2[3] = 'o';
            d2[3] = 'o';
            console.log(r4, c2, d2);
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

$(box_18).on('click', function () {
    if (r4[2] === undefined) {
        if (turn % 2 === 0) {
            r4[2] = "x";
            c3[3] = 'x';
            console.log(r4, c3);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r4[2] = "o";
            c2[3] = 'o';
            console.log(r4, c3);
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

$(box_19).on('click', function () {
    if (r4[3] === undefined) {
        if (turn % 2 === 0) {
            r4[2] = "x";
            c4[3] = 'x';
            d1[3] = 'x';
            console.log(r4, c4, d1);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r4[2] = "o";
            c4[3] = 'o';
            d1[3] = 'o';
            console.log(r4, c4, d1);
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

$(box_20).on('click', function () {
    if (r4[4] === undefined) {
        if (turn % 2 === 0) {
            r4[4] = "x";
            c5[3] = 'x';
            console.log(r4, c5);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r4[4] = "o";
            c5[3] = 'o';
            console.log(r4, c5);
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

$(box_21).on('click', function () {
    if (r5[0] === undefined) {
        if (turn % 2 === 0) {
            r5[0] = "x";
            c1[4] = 'x';
            d2[4] = 'x';
            console.log(r5, c1, d2);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r4[4] = "o";
            c5[3] = 'o';
            d2[4] = 'o';
            console.log(r5, c1, d2);
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

$(box_22).on('click', function () {
    if (r5[1] === undefined) {
        if (turn % 2 === 0) {
            r5[1] = "x";
            c2[4] = 'x';
            console.log(r5, c2);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r5[1] = "o";
            c2[4] = 'o';
            console.log(r5, c2);
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

$(box_23).on('click', function () {
    if (r5[2] === undefined) {
        if (turn % 2 === 0) {
            r5[2] = "x";
            c3[4] = 'x';
            console.log(r5, c3);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r5[2] = "o";
            c3[4] = 'o';
            console.log(r5, c3);
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

$(box_24).on('click', function () {
    if (r5[3] === undefined) {
        if (turn % 2 === 0) {
            r5[3] = "x";
            c4[4] = 'x';
            console.log(r5, c4);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r5[3] = "o";
            c4[4] = 'o';
            console.log(r5, c4);
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

$(box_25).on('click', function () {
    if (r5[4] === undefined) {
        if (turn % 2 === 0) {
            r5[4] = "x";
            c5[4] = 'x';
            d1[4] = 'x';
            console.log(r5, c5, d1);
            turn++;
        }
        else if (turn % 2 !== 0) {
            r5[4] = "o";
            c5[4] = 'o';
            d1[4] = 'o';
            console.log(r5, c5, d1);
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