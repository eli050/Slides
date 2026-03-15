import { useState } from "react";
import {Board} from "../components/Board";
import { createBoard } from "../utils/boardLogic";
import { Shuffle } from "../components/Shuffle";
import { GamePanel } from "../components/styled_components/GamePanel";
import { BoardSizeInput } from "../components/BoardSizeInput";

export function GameBoardPage(): JSXElement{
    const [boardSize, setBoardSize] = useState<number>(3)
    const [tileValues, setTileValues] = useState<number[]>(createBoard(0, boardSize * boardSize));

    function handleTileClick() {
            setTileValues(createBoard(0,boardSize * boardSize));
    }

    function handleBoardSizeChange(newSize: number) {
            setBoardSize(newSize);
            setTileValues(createBoard(0, newSize * newSize));
    }

    return(
        <GamePanel>
            <BoardSizeInput onBoardSizeChange={handleBoardSizeChange}/>
            <Board 
            tileValues={tileValues} 
            setTileValues={setTileValues}
            boardSize={boardSize}/>
            <Shuffle onClick={handleTileClick}/>
        </GamePanel>
    )
}