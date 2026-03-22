import {Tile} from "./Tile";
import {BoardBox} from "../styled_components/BoardBox";
import { canMove,isBoarsComplete,swapTiles } from "../../utils/boardLogic"

type BoardProps = {
    tileValues: number[];
    setTileValues: React.Dispatch<React.SetStateAction<number[]>>;
    setIsWon: React.Dispatch<React.SetStateAction<boolean>>;
    boardSize: number;
}

export function Board({tileValues, setTileValues, boardSize, setIsWon}: BoardProps): JSXElement {

    function handleTileClick(index: number) {
        if (!canMove(tileValues, index)) return;
        const newBoard = swapTiles(tileValues, index);
        setTileValues(newBoard);
        if (isBoarsComplete(newBoard)){
            setIsWon(true);
        }
    }

    return (
        <BoardBox boardSize={boardSize}>
            {tileValues.map(
                (value, index) =>
                !(value === 0) ?
            <Tile
                key={index}
                onClick={() => handleTileClick(index)}
                value={value}
                disabled={!canMove(tileValues, index)}
            /> :
            <Tile
                key={index}
                onClick={() => handleTileClick(index)}
                disabled={!canMove(tileValues, index)}
            />
        )}
        </BoardBox>
    )
}
