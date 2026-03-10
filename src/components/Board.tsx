import {Tile} from "./Tile";
import { useState} from "react";
import {BoardBox} from "./styled_components/BoardBox";
import { canMove, createBoard, swapTiles } from "../utils/boardLogic"

export function Board(): JSXElement {
    const [tileValues, setTileValues] = useState<number[]>(createBoard(0,9));
    
    function handleTileClick(index: number) {
        if (!canMove(tileValues, index)) return;
        setTileValues(swapTiles(tileValues, index));
    }

    return (
        <BoardBox>
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
