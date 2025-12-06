import { useState, useEffect } from 'react';

const ROWS = 6;
const COLS = 7;
const PLAYER_1 = 'red';
const PLAYER_2 = 'yellow';

export const useConnectFour = () => {
    const [board, setBoard] = useState(
        Array.from({ length: ROWS }, () => Array(COLS).fill(null))
    );

    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        setBoard(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
        setCurrentPlayer(PLAYER_1);
        setWinner(null);
    };

    const dropChip = (colIndex) => {
        if (winner) return;

        const newBoard = board.map(row => [...row]);

        let rowIndex = -1;
        for (let r = ROWS - 1; r >= 0; r--) {
            if (newBoard[r][colIndex] === null) {
                newBoard[r][colIndex] = currentPlayer;
                rowIndex = r;
                break;
            }
        }

        if (rowIndex === -1) return;

        setBoard(newBoard);

        if (checkWin(newBoard, rowIndex, colIndex, currentPlayer)) {
            setWinner(currentPlayer);
        } else if (checkDraw(newBoard)) {
            setWinner('draw');
        } else {
            setCurrentPlayer(prev => prev === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        }
    };

    return {
        board,
        currentPlayer,
        winner,
        dropChip,
        resetGame
    };
};


function checkDraw(board) {
    return board[0].every(cell => cell !== null);
}

function checkWin(board, r, c, player) {
    const directions = [
        [0, 1],
        [1, 0],
        [1, 1],
        [1, -1]
    ];

    for (let [dr, dc] of directions) {
        let count = 1;

        for (let i = 1; i < 4; i++) {
            const nr = r + dr * i;
            const nc = c + dc * i;
            if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || board[nr][nc] !== player) break;
            count++;
        }

        for (let i = 1; i < 4; i++) {
            const nr = r - dr * i;
            const nc = c - dc * i;
            if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || board[nr][nc] !== player) break;
            count++;
        }

        if (count >= 4) return true;
    }
    return false;
}