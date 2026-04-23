import { styled } from "@mui/material/styles";
import { BaseButton } from "./BaseButton";


type TileButtonProps = {
  showAsMovable: boolean;
  isEmpty: boolean;
};

export const TileButton = styled(BaseButton, {
  shouldForwardProp: (prop) => prop !== "showAsMovable" && prop !== "isEmpty",
})<TileButtonProps>(({ showAsMovable, isEmpty }) => ({

  width: "100%",
  height: "100%",
  borderRadius: 10,
  fontSize: "1.5rem",
  backgroundColor: showAsMovable ?
    "var(--azure-blue)" : "var(--azure-blue-)",
  color: "white",

  "&:hover": {
    backgroundColor: showAsMovable ?
      "var(--azure-blue)" : "var(--azure-blue-)",
    transform: showAsMovable ? "scale(1.03)" : "none",
  },

  "&.Mui-disabled": {
    backgroundColor: showAsMovable ?
      "var(--azure-blue)" :
      isEmpty ?
        "transparent" :
        "var(--azure-blue-)",
    color: "white",
    opacity: 1,
  },
}));