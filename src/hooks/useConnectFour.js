import { useState } from 'react';

const ROWS = 6;
const COLS = 7;

export const useConnectFour = () => {
    const getInitialSettings = () => {
        const saved = localStorage.getItem('gameSettings');
        if (saved) return JSON.parse(saved);
        return {
            player1Name: 'Гравець 1',
            player2Name: 'Гравець 2',
            winCondition: 4
        };
    };

    const [settings] = useState(getInitialSettings);
    const [board, setBoard] = useState(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
    const [currentPlayer, setCurrentPlayer] = useState('red');
    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        setBoard(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
        setCurrentPlayer('red');
        setWinner(null);
    };

    const checkWin = (board, r, c, player) => {
        const directions = [
            [0, 1], [1, 0], [1, 1], [1, -1]
        ];
        const winCount = parseInt(settings.winCondition, 10);

        for (let [dr, dc] of directions) {
            let count = 1;

            for (let i = 1; i < winCount; i++) {
                const nr = r + dr * i;
                const nc = c + dc * i;
                if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || board[nr][nc] !== player) break;
                count++;
            }

            for (let i = 1; i < winCount; i++) {
                const nr = r - dr * i;
                const nc = c - dc * i;
                if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || board[nr][nc] !== player) break;
                count++;
            }

            if (count >= winCount) return true;
        }
        return false;
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
        } else if (newBoard[0].every(cell => cell !== null)) {
            setWinner('draw');
        } else {
            setCurrentPlayer(prev => prev === 'red' ? 'yellow' : 'red');
        }
    };

    return { board, currentPlayer, winner, dropChip, resetGame, settings };
};