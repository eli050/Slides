import { useForm } from "react-hook-form";
import { AuthForm } from "../styled_components/AuthForm";
import { CardHeader } from '@mui/material';
import { Input } from "../styled_components/Input";
import { AuthButton } from "../styled_components/AuthButton";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

type SignUpProps = {
    onSubmit: (data:SignUpFormData) => void;
}

type SignUpFormData = {
    name: string;
    email: string;
    password: number;
};


export function SignUp({onSubmit}:SignUpProps):JSXElement{

    const {register, handleSubmit,} = useForm<SignUpFormData>()

    return (
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <CardHeader title="Sign Up" />
            <Input
                label="Name"
                type="text"
                {...register("name", { required: "Name is required" })}
            />
            <Input
                label="Email"
                type="email"
                {...register("email", { required: "Email is required" })}
            />

            <Input
                label="Password"
                type="password"
                {...register("password", { required: "Password is required", valueAsNumber: true })}
            />

            <AuthButton type="submit" variant="contained" fullWidth>
                SignUp
            </AuthButton>

            <Typography>
                You already have an account?{" "}
                <Link to="/sign-in" >Sign in</Link>
            </Typography>
        </AuthForm>
    )
}