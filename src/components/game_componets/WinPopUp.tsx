import { Button, DialogActions, } from "@mui/material";
import { createBoard } from "../../utils/boardLogic";
import { START_TILE } from "../../constants/gameConsts";
import { AlertPopUp } from "../AlertPopUp";

type WinPopUpProps = {
    isWon: boolean;
    boardSize: number;
    handleClose: () => void;
    setTileValues: React.Dispatch<React.SetStateAction<number[]>>;
    handlePlayAgain: () => void;
}

export function WinPopUp({
    isWon,
    handleClose: handelClose,
    setTileValues,
    boardSize,
    handlePlayAgain, }: WinPopUpProps): JSXElement {

    return (
        <AlertPopUp
            open={isWon}
            onClose={handelClose}
            title="You Won!"
            content="Nice job, the board is solved."
        >
            <DialogActions>
                <Button
                    onClick={() => {
                        handlePlayAgain();
                        setTileValues(createBoard(START_TILE, boardSize ** 2));
                    }}
                >
                    Play Again
                </Button>
            </DialogActions>
        </AlertPopUp>
    )
}