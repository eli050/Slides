import { useState } from "react";
import {Board} from "../components/Board";
import { createBoard } from "../utils/boardLogic";
import { Shuffle } from "../components/Shuffle";
import { GamePanel } from "../components/styled_components/GamePanel";

export function GameBoardPage(): JSXElement{
    const [tileValues, setTileValues] = useState<number[]>(createBoard(0,9));

    function handleTileClick() {
            setTileValues(createBoard(0,9));
    }

    return(
        <GamePanel>
            <Board tileValues={tileValues} setTileValues={setTileValues}/>
            <Shuffle onClick={handleTileClick}/>
        </GamePanel>
    )
}