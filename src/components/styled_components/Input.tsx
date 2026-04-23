import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Input = styled(TextField)({
    '--azure-blue': "rgb(94, 141, 187)",
    '--dark-blue': "#b1cae4",

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

    "& .MuiInputLabel-root.Mui-disabled": {
        color: "gray",
        opacity: 0.8,
    },

    "& .MuiOutlinedInput-root.Mui-disabled": {
        backgroundColor: "var(--dark-blue)",
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

    "& .MuiOutlinedInput-root.Mui-disabled fieldset": {
        borderColor: "transparent",
    },

    "& .MuiOutlinedInput-input": {
        color: "white",
        backgroundColor: "transparent",
    },

    "& .MuiOutlinedInput-input.Mui-disabled": {
        WebkitTextFillColor: "gray",
        opacity: 0.8,
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