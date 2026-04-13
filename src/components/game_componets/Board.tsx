import { Tile } from "./Tile";
import { BoardBox } from "../styled_components/BoardBox";
import { canMove, isBoardComplete, swapTiles } from "../../utils/boardLogic"

const EMPTY_TILE = 0;

type BoardProps = {
    tileValues: number[];
    setTileValues: React.Dispatch<React.SetStateAction<number[]>>;
    setIsWon: React.Dispatch<React.SetStateAction<boolean>>;
    boardSize: number;
    canPlay: boolean;
}

export function Board({
    tileValues,
    setTileValues,
    boardSize,
    setIsWon,
    canPlay, }: BoardProps): JSXElement {

    function handleTileClick(index: number) {

        if (!canMove(tileValues, index)) return;
        const newBoard = swapTiles(tileValues, index);
        setTileValues(newBoard);

        if (isBoardComplete(newBoard)) {
            setIsWon(true);
        }
    }

    return (
        <BoardBox boardSize={boardSize}>
            {tileValues.map(
                (value, index) =>
                    <Tile
                        key={value}
                        onClick={() => handleTileClick(index)}
                        value={!(value === EMPTY_TILE) ? value : null}
                        disabled={!canMove(tileValues, index) || !canPlay}
                    />
            )}
        </BoardBox>
    )
}
