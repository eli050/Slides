import { useForm } from "react-hook-form";
import { AuthForm } from "../styled_components/AuthForm";
import { CardHeader } from '@mui/material';
import { Input } from "../styled_components/Input";
import { AuthButton } from "../styled_components/AuthButton";

type SignInProps = {
    onSubmit: (data:LoginFormData) => void;
}

type LoginFormData = {
  email: string;
  password: number;
};


export function SignIn({onSubmit}:SignInProps):JSXElement{

    const {register, handleSubmit,} = useForm<LoginFormData>()

    return (
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <CardHeader title="Sign In" />
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
                SignIn
            </AuthButton>
        </AuthForm>
    )
}