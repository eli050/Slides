import { useState } from "react";
import { createBoard } from "../utils/boardLogic";
import { GamePanel } from "../components/styled_components/GamePanel";
import { BoardSizeInput } from "../components/game_componets/BoardSizeInput";
import { Board } from "../components/game_componets/Board";
import { Shuffle } from "../components/game_componets/Shuffle";
import { Solved } from "../components/game_componets/Solved";

const DEFAULT_SIZE = 3;

export function GameBoardPage(): JSXElement{
    const [isWon, setIsWon] = useState<boolean>(false);
    const [boardSize, setBoardSize] = useState<number>(DEFAULT_SIZE)
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