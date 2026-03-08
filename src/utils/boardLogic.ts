
function canMove(board:(number | null)[], index:number):boolean{
    
    const emptyTileIndex:number = board.indexOf(null);

    const row = Math.floor(index / 3);
    const column = index % 3;

    const emptyTileRow = Math.floor(emptyTileIndex / 3);
    const emptyTileColumn = emptyTileIndex % 3;

    const sameRow = row === emptyTileRow && Math.abs(column - emptyTileColumn) === 1;
    const sameColumn = column === emptyTileColumn && Math.abs(row - emptyTileRow) === 1;
    
    return sameRow || sameColumn;
}

function moveTile(board:(number | null)[], index:number):(number | null)[]{
    const emptyIndex:number = board.indexOf(null);
    const nextBoard = [...board];
    [nextBoard[index], nextBoard[emptyIndex]] = [nextBoard[emptyIndex], nextBoard[index]] 
    return nextBoard;
}

export {canMove, moveTile}