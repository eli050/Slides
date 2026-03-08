import type { JSX } from "react";
import TileButton from "./styled_components/TileButton";

type TileProps = {
    value: number | null;
    onClick: () => void;
    disabled: boolean;
}

function Tile({ value, onClick, disabled }: TileProps): JSX.Element {

    return (
        <TileButton
            onClick={onClick} disabled={disabled}>
            {value}
        </TileButton>
    )
}

export default Tile;