import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const BoardBox = styled(Box)({
  width: 300,
  height: 300,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 12,
  backgroundColor: "white",
  borderRadius: 10,
  padding: 10,

});

export default BoardBox