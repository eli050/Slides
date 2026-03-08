import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const TileButton = styled(Button)({
    width: "100%",
    height: "100%",
    borderRadius: 10,
    fontSize: "1.5rem",
    backgroundColor: "#529ee9ff",
    color: "white",

    "&:hover": {
        backgroundColor: "#1565c0",
        transform: "scale(1.03)",
    },

    "&.Mui-disabled": {
        backgroundColor: "#d9d9d9",
        color: "#666",
    },
});

export default TileButton;