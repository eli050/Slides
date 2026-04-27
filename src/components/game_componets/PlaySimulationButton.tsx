import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "../styled_components/IconButton";

type PlaySimulationButtonProps = {
    onClick: () => void;
    isPlay: boolean
}

export function PlaySimulationButton({ onClick, isPlay, }: PlaySimulationButtonProps): JSXElement {

    return (
        <IconButton onClick={onClick}>
            {isPlay ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
    )
}