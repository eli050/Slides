import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Input = styled(TextField)({
    "--azure-blue": "rgb(70, 151, 232)",

    "& .MuiInputLabel-root": {
        color: "white",
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: "white",
    },

    "& .MuiOutlinedInput-root": {
        backgroundColor: "var(--azure-blue)",
        color: "white",
        borderRadius: 8,
    },

    "& .MuiOutlinedInput-root fieldset": {
        borderColor: "transparent",
    },

    "& .MuiOutlinedInput-root:hover fieldset": {
        borderColor: "white",
    },

    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
        borderColor: "white",
    },

    "& .MuiOutlinedInput-input": {
        color: "white",
        backgroundColor: "transparent",
    },

    "& .MuiOutlinedInput-input::placeholder": {
        color: "white",
    },

    "& .MuiInputAdornment-root": {
        backgroundColor: "transparent",
    },

    "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px var(--azure-blue) inset",
    },
});