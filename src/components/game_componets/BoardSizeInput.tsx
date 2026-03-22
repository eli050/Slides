import {Autocomplete, type AutocompleteRenderInputParams,} from "@mui/material";
import { Input } from "../styled_components/Input";


type BoardSizeOption = {
  label: string;
  value: number;
};

const boardSizeOptions: BoardSizeOption[] = [
  { label: "3 x 3", value: 3 },
  { label: "4 x 4", value: 4 },
  { label: "5 x 5", value: 5 },
];

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
            options={boardSizeOptions}
            getOptionLabel={(option) => option.label}
            onChange={(_, option) => {
                if (option !== null) {
                onBoardSizeChange(option.value);
                }
            }}
            renderInput={(params) => RenderInput(params)}
        />
    )
}