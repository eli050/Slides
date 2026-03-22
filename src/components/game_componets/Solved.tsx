import { 
     Button,
     Dialog, 
     DialogActions, 
     DialogContent, 
     DialogTitle, 
     IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createBoard } from "../../utils/boardLogic";


type SolvedProps = {
    isWon: boolean;
    boardSize: number;
    handelClose: () => void;
    setTileValues: React.Dispatch<React.SetStateAction<number[]>>;
}


export function Solved({
     isWon,
     handelClose,
     setTileValues,
     boardSize}:SolvedProps):JSXElement{
    
    return (
        <Dialog open={isWon}>
            <DialogTitle>
                You Won!
                <IconButton
                    onClick={handelClose}
                    sx={{ position: "absolute", right: 8, top: 8 }}
                    >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                    Nice job, the board is solved.
            </DialogContent>

            <DialogActions>
                <Button
                onClick={() => {
                    handelClose();
                    setTileValues(createBoard(0, boardSize * boardSize));
                }}
                >
                Play Again
                </Button>
            </DialogActions>
        </Dialog>
    )
}