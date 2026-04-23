import { useRef, useState } from "react";
import { createBoard, createCompletedBoard, EMPTY_TILE, reaplaceToMatrix } from "../utils/boardLogic";
import { GamePanel } from "../components/styled_components/GamePanel";
import { BoardSizeInput } from "../components/game_componets/BoardSizeInput";
import { Board } from "../components/game_componets/Board";
import { Shuffle } from "../components/game_componets/Shuffle";
import { WinPopUp } from "../components/game_componets/WinPopUp";
import { MINIMUM_SIZE, START_TILE } from "../constants/gameConsts";
import { useUser } from "../components/auth_components/UserContext";
import { Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { solvePuzzle, type SolvePuzzleResponse } from "../api/puzzleAPI";
import { SolveButton } from "../components/game_componets/SolveButton";
import { sleep } from "../utils/auxiliryFunctions";
import { ButtonsBox } from "../components/styled_components/ButtonsBox";
import { PlaySimulationButton } from "../components/game_componets/PlaySimulationButton";

const DEFAULT_SIZE = MINIMUM_SIZE;
const WAIT_TIME = 1000;

export function GameBoardPage(): JSXElement {
    const [isWon, setIsWon] = useState<boolean>(false);
    const [canPlay, setCanPlay] = useState<boolean>(true);
    const [boardSize, setBoardSize] = useState<number>(DEFAULT_SIZE)
    const [tileValues, setTileValues] = useState<number[]>(createBoard(START_TILE, boardSize ** 2));
    const [isSimulationNotActive, setisSimulationNotActive] = useState<boolean>(true);
    const isSimulationPlayingRef = useRef<boolean>(false);
    const [isSimulationPlaying, setisSimulationPlaying] = useState<boolean>(isSimulationPlayingRef.current);
    const { currentUser } = useUser();
    const {
        mutate,
        error,
        isPending,
        isError,
        } = useMutation({
        mutationFn: solvePuzzle,
    });


    function handleShuffleClick() {
        const newBoard = createBoard(START_TILE, boardSize ** 2);
        setTileValues(newBoard);
        setCanPlay(true);
    }

    function handleBoardSizeChange(newSize: number) {
        setBoardSize(newSize);
        setTileValues(createBoard(START_TILE, newSize ** 2));
        setCanPlay(true);
    }

    function handleWinPopUpClose() {
        setIsWon(false);
        setCanPlay(false);
    }

    function handlePlayAgain() {
        setIsWon(false);
        setCanPlay(true);
    }

    async function startSimulatuon(data: SolvePuzzleResponse ){
            setCanPlay(false);
            setisSimulationNotActive(false);
            isSimulationPlayingRef.current = true;
            setisSimulationPlaying(isSimulationPlayingRef.current)
            for (const board of data.path){
                while (!isSimulationPlayingRef.current){
                    await sleep(10);
                }
                setTileValues(board.flat().map(Number));
                await sleep(WAIT_TIME); 
            }
            setisSimulationNotActive(true);
    }

    function handleSloveButtonClick() {
        const board = reaplaceToMatrix(tileValues) 
        const movable_tile = `${EMPTY_TILE}`
        const targetBoard = reaplaceToMatrix(createCompletedBoard(START_TILE, tileValues.length))
        mutate({board, movable_tile, targetBoard}, {
            onSuccess: async (data) => startSimulatuon(data)
        })
    }

    function handlePlaySimulationButtonClick() {
        isSimulationPlayingRef.current = !isSimulationPlayingRef.current;
        setisSimulationPlaying(isSimulationPlayingRef.current)
    }

    return (
        <GamePanel>
            <Typography variant="h4" component="h1">
                {`Welcome ${currentUser?.name}`}
            </Typography>

            <BoardSizeInput onBoardSizeChange={handleBoardSizeChange} disabled={!isSimulationNotActive || isPending}/>

            <Board
                tileValues={tileValues}
                setTileValues={setTileValues}
                setIsWon={setIsWon}
                boardSize={boardSize}
                canPlay={canPlay} />
            
            {isError && <span> {error.message} </span>}

            <ButtonsBox>
                <Shuffle onClick={handleShuffleClick} disabled={!isSimulationNotActive || isPending} />

                {isSimulationNotActive ? 
                <SolveButton onClick={handleSloveButtonClick} disabled={isPending || !canPlay} />
             : <PlaySimulationButton onClick={handlePlaySimulationButtonClick} isPlay={isSimulationPlaying} />}
            </ButtonsBox>

            <WinPopUp
                isWon={isWon}
                boardSize={boardSize}
                handleClose={handleWinPopUpClose}
                setTileValues={setTileValues}
                handlePlayAgain={handlePlayAgain} />
        </GamePanel>
    )
}