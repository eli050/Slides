import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const TileButton = styled(Button)({
    '--azure-blue': "#1565c0",
    '--dark-white': "#e1d9d1",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    fontSize: "1.5rem",
    backgroundColor: "#529ee9ff",
    color: "white",

    "&:hover": {
        backgroundColor: "var(--azure-blue)",
        transform: "scale(1.03)",
    },

    "&.Mui-disabled": {
        backgroundColor: "var(--dark-white)",
        color: "gray",
    },
});