import { range, random } from "lodash";

const EMPTY_TILE = 0;


function getNeighbors(index: number, boardLength: number): number[] {
    const boardSize = boardLength ** (0.5)
    const row = Math.floor(index / boardSize);
    const column = index % boardSize;
    const neighbors = [];

    if (row > 0) {
        neighbors.push(index - boardSize)
    }

    if (row < boardSize - 1) {
        neighbors.push(index + boardSize)
    }

    if (column > 0) {
        neighbors.push(index - 1)
    }

    if (column < boardSize - 1) {
        neighbors.push(index + 1)
    }

    return neighbors;
}

export function canMove(board: number[], index: number): boolean {
    const emptyTileIndex = board.indexOf(EMPTY_TILE);
    const neighbors = getNeighbors(emptyTileIndex, board.length)
    return neighbors.includes(index);
}

export function swapTiles(board: number[], index: number): number[] {
    const emptyIndex: number = board.indexOf(EMPTY_TILE);
    const nextBoard = [...board];
    [nextBoard[index], nextBoard[emptyIndex]] = [nextBoard[emptyIndex], nextBoard[index]]
    return nextBoard;
}

export function createBoard(start: number, end: number): number[] {
    let board = range(start, end);
    const shuffleTimes = random(200, 500);

    for (let i = 0; i < shuffleTimes; i++) {
        const emptyTileIndex = board.indexOf(EMPTY_TILE);
        const neighbors = getNeighbors(emptyTileIndex, board.length);
        const randomIndex = random(neighbors.length - 1);
        board = swapTiles(board, neighbors[randomIndex]);
    }

    return board;
}