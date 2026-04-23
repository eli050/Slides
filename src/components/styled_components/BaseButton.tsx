import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BaseButton = styled(Button)({
  '--azure-blue': "rgb(94, 141, 187)",
  '--azure-blue-': "rgb(130, 162, 193)",
  '--blue': "#4677ae",
  '--dark-white': "#e1d9d1",
  '--dark-blue': "#b1cae4",

  backgroundColor: "var(--azure-blue)",
  color: "white",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "var(--blue)",
    transform: "scale(1.03)",
  },

  "&.Mui-disabled": {
    backgroundColor: "var(--dark-blue)",
  },

  "&:focus": {
    outline: "none",
  },
});