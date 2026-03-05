import Tile from "./Tile";
import type { JSX } from "react";
import _ from 'lodash'
import BoardBox from "./styled_components/BoardBox";

function Board(): JSX.Element {
    const tileValues: (number | null)[] = _.shuffle([..._.range(1,9), null]);
    const tileElements: JSX.Element[] = tileValues.map(
        (value, index) => <Tile 
        key={index}
        onClick={() => console.log(value)} 
        value={value} 
        />)
    return (
         <BoardBox>
            {tileElements}
         </BoardBox>
        )
}

export default Board;
