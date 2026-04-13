import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export const TransparentButton = styled(IconButton)({
    "--transparent-black": "rgba(0, 0, 0, 0.5)",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    outline: "none",
    padding: 8,
    borderRadius: "50%",

    "&:hover": {
        backgroundColor: "var(--transparent-black)",
    },

    "&:focus": {
        outline: "none",
        boxShadow: "none",
    },

    "&:focus-visible": {
        outline: "none",
        boxShadow: "none",
    },

    "&:active": {
        boxShadow: "none",
    },
});