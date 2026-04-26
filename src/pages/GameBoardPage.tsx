import { useRef, useState } from "react";
import { createBoard, createCompletedBoard, EMPTY_TILE, reaplaceToMatrix } from "../utils/boardLogic";
import { GamePanel } from "../components/styled_components/GamePanel";
import { BoardSizeInput } from "../components/game_componets/BoardSizeInput";
import { Board } from "../components/game_componets/Board";
import { Shuffle } from "../components/game_componets/Shuffle";
import { WinPopUp } from "../components/game_componets/WinPopUp";
import { MINIMUM_SIZE, START_TILE } from "../constants/gameConsts";
import { useUser } from "../components/auth_components/UserContext";
import { Alert, Typography } from "@mui/material";
import { type SolvePuzzleResponse } from "../api/puzzleAPI";
import { SolveButton } from "../components/game_componets/SolveButton";
import { sleep } from "../utils/auxiliryFunctions";
import { ButtonsBox } from "../components/styled_components/ButtonsBox";
import { PlaySimulationButton } from "../components/game_componets/PlaySimulationButton";
import { useSolvePuzzle } from "../hooks/useSolvePuzzle";

const DEFAULT_SIZE = MINIMUM_SIZE;
const WAIT_TIME = 1000;

export function GameBoardPage(): JSXElement {
    const [isWon, setIsWon] = useState<boolean>(false);
    const [canPlay, setCanPlay] = useState<boolean>(true);
    const [boardSize, setBoardSize] = useState<number>(DEFAULT_SIZE)
    const [tileValues, setTileValues] = useState<number[]>(createBoard(START_TILE, boardSize ** 2));
    const [isSimulationNotActive, setIsSimulationNotActive] = useState<boolean>(true);
    const isSimulationPlayingRef = useRef<boolean>(false);
    const [isSimulationPlaying, setIsSimulationPlaying] = useState<boolean>(isSimulationPlayingRef.current);
    const resumeSimulationRef = useRef<(() => void) | null>(null);
    const { currentUser } = useUser();
    const {
        mutate,
        error,
        isPending,
        isError,
        reset
    } = useSolvePuzzle();

    function handleShuffleClick() {
        reset();
        const newBoard = createBoard(START_TILE, boardSize ** 2);
        setTileValues(newBoard);
        setCanPlay(true);
    }

    function handleBoardSizeChange(newSize: number) {
        reset();
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

    function pauseSimulation() {
        isSimulationPlayingRef.current = false;
        setIsSimulationPlaying(isSimulationPlayingRef.current);
    }

    function resumeSimulation() {
        isSimulationPlayingRef.current = true;
        setIsSimulationPlaying(true);

        if (resumeSimulationRef.current) {
            resumeSimulationRef.current();
            resumeSimulationRef.current = null;
        }
    }

    function waitUntilResumed(): Promise<void> {
        if (isSimulationPlayingRef.current) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            resumeSimulationRef.current = resolve;
        });
    }

    async function startSimulatuon(data: SolvePuzzleResponse) {
        setCanPlay(false);
        setIsSimulationNotActive(false);
        isSimulationPlayingRef.current = true;
        setIsSimulationPlaying(isSimulationPlayingRef.current)
        for (const board of data.path) {
            await waitUntilResumed()
            setTileValues(board.flat().map(Number));
            await sleep(WAIT_TIME);
        }
        setIsSimulationNotActive(true);
    }

    function handleSolveButtonClick() {
        reset()
        const board = reaplaceToMatrix(tileValues)
        const movableTile = `${EMPTY_TILE}`
        const targetBoard = reaplaceToMatrix(createCompletedBoard(START_TILE, tileValues.length))
        mutate({ board, movableTile, targetBoard }, {
            onSuccess: async (data) => startSimulatuon(data)
        })
    }

    function handlePlaySimulationButtonClick() {
        isSimulationPlayingRef.current ? pauseSimulation() : resumeSimulation();
        setIsSimulationPlaying(isSimulationPlayingRef.current)
    }

    return (
        <GamePanel>
            <Typography variant="h4" component="h1">
                {`Welcome ${currentUser?.name}`}
            </Typography>

            <BoardSizeInput onBoardSizeChange={handleBoardSizeChange} disabled={!isSimulationNotActive || isPending} />

            <Board
                tileValues={tileValues}
                setTileValues={setTileValues}
                setIsWon={setIsWon}
                boardSize={boardSize}
                canPlay={canPlay} />

            {isError && (
                <Alert severity="error">
                    {error.message}
                </Alert>
            )}

            <ButtonsBox>
                <Shuffle onClick={handleShuffleClick} disabled={!isSimulationNotActive || isPending} />

                {isSimulationNotActive ?
                    <SolveButton onClick={handleSolveButtonClick} disabled={isPending || !canPlay} />
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