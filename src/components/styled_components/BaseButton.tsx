import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BaseButton = styled(Button)({
  '--azure-blue': "rgb(99, 164, 229)",
  '--blue': "#297cda",
  '--dark-white': "#e1d9d1",

  backgroundColor: "var(--azure-blue)",
  color: "white",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "var(--blue)",
    transform: "scale(1.03)",
  },

  "&.Mui-disabled": {
    backgroundColor: "var(--dark-white)",
    color: "gray",
  },

  "&:focus": {
    outline: "none",
  },
});