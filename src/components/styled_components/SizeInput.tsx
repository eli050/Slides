import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";



export const SizeInput = styled(TextField)({
    '--azure-blue': "#529ee9ff",

    "& .MuiInputLabel-root": {
        color: "white",
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: "white",
    },

    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
        borderColor: "white",
    },

    "& .MuiOutlinedInput-root": {
        backgroundColor: "var(--azure-blue)",
        color: "white",
        borderRadius: 8,
    },

    "& .MuiOutlinedInput-input": {
        color: "white",
    },

    "& .MuiOutlinedInput-input::placeholder": {
        color: "white",
    },
});
