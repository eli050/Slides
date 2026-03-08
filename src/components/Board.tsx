import Tile from "./Tile";
import { useState, type JSX } from "react";
import _ from 'lodash'
import BoardBox from "./styled_components/BoardBox";
import { canMove, moveTile } from "../utils/boardLogic"

function Board(): JSX.Element {
    const [tileValues, setTileValues] = useState<(number | null)[]>(_.shuffle([..._.range(1, 9), null]));
    
    function handleTileClick(index: number) {
        if (!canMove(tileValues, index)) return;
        setTileValues(moveTile(tileValues, index));
    }

    const tileElements: JSX.Element[] = tileValues.map(
        (value, index) => <Tile
            key={index}
            onClick={() => handleTileClick(index)}
            value={value}
            disabled={!canMove(tileValues, index)}
        />)

    return (
        <BoardBox>
            {tileElements}
        </BoardBox>
    )
}

export default Board;
