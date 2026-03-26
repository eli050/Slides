import {Autocomplete, type AutocompleteRenderInputParams,} from "@mui/material";
import { Input } from "../styled_components/Input";
import { range } from "lodash";
import { MAXIMUM_SIZE, MINIMUM_SIZE } from "../../constants/gameVariables";

const BOARD_SIZE_OPTIONS: number[] = range(MINIMUM_SIZE, MAXIMUM_SIZE +1);

type BoardSizeInputProps = {
  onBoardSizeChange: (size: number) => void;
};

function RenderInput(params: AutocompleteRenderInputParams): JSXElement{
    return <Input {...params} 
    label="Board size"
    placeholder="Select board size" 
    /> 
}

export function BoardSizeInput({onBoardSizeChange}: BoardSizeInputProps): JSXElement{

    return (
        <Autocomplete
            options={BOARD_SIZE_OPTIONS}
            getOptionLabel={(option) => `${option} x ${option}` }
            onChange={(_, option) => {
                if (option) {
                onBoardSizeChange(option);
                }
            }}
            renderInput={(params) => RenderInput(params)}
        />
    )
}