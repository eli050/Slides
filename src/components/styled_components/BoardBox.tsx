import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoardBox = styled(Box)({
  '--light-blue': "#88bed7ff",
  width: 350,
  height: 350,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 12,
  backgroundColor: "var(--light-blue)",
  borderRadius: 10,
  padding: 10,
});