import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IconButton } from "../styled_components/IconButton";

type ShuffleProps = {
    onClick: () => void;
    disabled: boolean;
}

export function Shuffle({ onClick, disabled }: ShuffleProps): JSXElement {
    return (
        <IconButton onClick={onClick} disabled={disabled}>
            <RestartAltIcon />
        </IconButton>
    )
}