import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { ShuffleButton } from "./styled_components/ShuffleButton";

type ShuffleProps = {
    onClick: () => void;
}

export function Shuffle({onClick}: ShuffleProps): JSXElement {
    return (
        <ShuffleButton onClick={onClick}>
            <RestartAltIcon />
        </ShuffleButton>
    )
}

