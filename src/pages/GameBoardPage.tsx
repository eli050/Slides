import { useState } from "react";
import { createBoard } from "../utils/boardLogic";
import { GamePanel } from "../components/styled_components/GamePanel";
import { BoardSizeInput } from "../components/game_componets/BoardSizeInput";
import { Board } from "../components/game_componets/Board";
import { Shuffle } from "../components/game_componets/Shuffle";
import { WinPopUp } from "../components/game_componets/WinPopUp";
import { MINIMUM_SIZE, START_TILE } from "../constants/gameVariables";
import { useUser } from "../components/auth_components/UserContext";
import {Typography } from "@mui/material";

const DEFAULT_SIZE = MINIMUM_SIZE;

export function GameBoardPage(): JSXElement{
    const [isWon, setIsWon] = useState<boolean>(false);
    const [canPlay, setCanPlay] = useState<boolean>(true);
    const [boardSize, setBoardSize] = useState<number>(DEFAULT_SIZE)
    const [tileValues, setTileValues] = useState<number[]>(createBoard(START_TILE, boardSize**2));
    const { currentUser} = useUser();
    
    function handleShuffleClick() {
        const newBoard = createBoard(START_TILE,boardSize**2);
        setTileValues(newBoard);
        setCanPlay(true);
    }

    function handleBoardSizeChange(newSize: number) {
        setBoardSize(newSize);
        setTileValues(createBoard(START_TILE, newSize**2));
        setCanPlay(true);
    }

    function handleWinPopUpClose() {
        setIsWon(false);
        setCanPlay(false);
    }

    function handlePlayAgain(){
        setIsWon(false);
        setCanPlay(true);
    }

    return(
        <GamePanel>
            <Typography variant="h4" component="h1">
                {`Welcome ${currentUser?.name}`}
            </Typography>
            <BoardSizeInput onBoardSizeChange={handleBoardSizeChange}/>
            <Board 
            tileValues={tileValues} 
            setTileValues={setTileValues}
            setIsWon={setIsWon}
            boardSize={boardSize}
            canPlay={canPlay}/>
            <Shuffle onClick={handleShuffleClick}/>
            <WinPopUp 
            isWon={isWon} 
            boardSize={boardSize}
            handleClose={handleWinPopUpClose}
            setTileValues={setTileValues}
            handlePlayAgain={handlePlayAgain}/>
        </GamePanel>
    )
}