import { styled } from "@mui/material/styles";
import { Form } from "../auth_components/Form";




export const AuthForm = styled(Form)({
    "--deep-blue": "rgb(5, 42, 59)",
    height: 500,
    width: 400,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    backgroundColor: "var(--deep-blue)",
    borderRadius: 10,
    padding: 20,
})