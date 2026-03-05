import type { JSX } from "react";
import Button from "@mui/material/Button";

type TileProps = {
    value: number | null;
    onClick: () => void;
}


function Tile({ value, onClick }: TileProps): JSX.Element {

    return (
       <Button 
       onClick={onClick}
       >
           {value}
       </Button>
    )
}

export default Tile;