import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { BaseBotton } from "./BaseButton";

export const ShuffleButton = styled(Button)({
  ...BaseBotton,
  minWidth: 0,
  width: 40,
  height: 40,
  borderRadius: "50%",
});