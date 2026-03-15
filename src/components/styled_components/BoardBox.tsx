import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoardBox = styled(Box)<{ boardSize: number }>(({boardSize}) => ({
  "--light-blue": "#88bed7ff",
  width: 400,
  height: 400,
  display: "grid",
  gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
  gap: 12,
  backgroundColor: "var(--light-blue)",
  borderRadius: 10,
  padding: 10,
}));