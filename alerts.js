var gameOver = false;

function squareClicked(square) {
    if (gameOver) {
        alert("The game is already over.");
        return;
    }
}

if (!checkWin()) {
    // Continue playing
    // Disable mouse click for this cell. This cell is no longer active
    thisCell.onmousedown = null;
    // toggling the current player
    crossPlaying = !crossPlaying;
}

