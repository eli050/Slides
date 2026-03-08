import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const BoardBox = styled(Box)({
  width: 350,
  height: 350,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 12,
  backgroundColor: "#88bed7ff",
  borderRadius: 10,
  padding: 10,

});

export default BoardBox