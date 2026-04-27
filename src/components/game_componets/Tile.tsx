import { TileButton } from "../styled_components/TileButton";

type TileProps = {
    value?: number | null;
    onClick: () => void;
    disabled: boolean;
    showAsMovable: boolean;
    hidden: boolean;
}

export function Tile({ value = null, onClick, disabled, showAsMovable, hidden, }: TileProps): JSXElement {
    return (
        <TileButton
            onClick={onClick}
            disabled={disabled}
            showAsMovable={showAsMovable}
            isEmpty={hidden}>
            {value}
        </TileButton>
    )
}