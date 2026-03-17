import { useState } from "react";
import {Board} from "../components/Board";
import { createBoard,} from "../utils/boardLogic";
import { Shuffle } from "../components/Shuffle";
import { GamePanel } from "../components/styled_components/GamePanel";
import { BoardSizeInput } from "../components/BoardSizeInput";
import { Solved } from "../components/Solved";

export function GameBoardPage(): JSXElement{
    const [isWon, setIsWon] = useState<boolean>(false);
    const [boardSize, setBoardSize] = useState<number>(3)
    const [tileValues, setTileValues] = useState<number[]>(createBoard(0, boardSize * boardSize));

    function handleTileClick() {
        const newBoard = createBoard(0,boardSize * boardSize);
        setTileValues(newBoard);
    }

    function handleBoardSizeChange(newSize: number) {
        setBoardSize(newSize);
        setTileValues(createBoard(0, newSize * newSize));
    }

    function handelClose() {
        setIsWon(false);
    }

    return(
        <GamePanel>
            <BoardSizeInput onBoardSizeChange={handleBoardSizeChange}/>
            <Board 
            tileValues={tileValues} 
            setTileValues={setTileValues}
            setIsWon={setIsWon}
            boardSize={boardSize}/>
            <Shuffle onClick={handleTileClick}/>
            <Solved 
            isWon={isWon} 
            boardSize={boardSize}
            handelClose={handelClose}
            setTileValues={setTileValues}/>
        </GamePanel>
    )
}