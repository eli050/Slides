import {TileButton} from "../styled_components/TileButton";

type TileProps = {
    value?: number | null;
    onClick: () => void;
    disabled: boolean;
}

export function Tile({ value = null, onClick, disabled }: TileProps): JSXElement {

    return (
        <TileButton
            onClick={onClick} disabled={disabled}>
            {value}
        </TileButton>
    )
}