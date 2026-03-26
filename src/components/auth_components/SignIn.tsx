import { useForm } from "react-hook-form";
import { AuthForm } from "../styled_components/AuthForm";
import { CardHeader,} from '@mui/material';
import { Input } from "../styled_components/Input";
import { AuthButton } from "../styled_components/AuthButton";
import type { SignInData } from "../../constants/authTypes";
import { AlertPopUp } from "../AlertPopUp";

type SignInProps = {
    onSubmit: (data:SignInData) => void| null;
    error: string|null;
    setError: React.Dispatch<React.SetStateAction<string|null>>;
}

export function SignIn({onSubmit, error, setError}:SignInProps):JSXElement{

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<SignInData>()

    return (
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <CardHeader title="Sign In" />
            <Input
                label="Email"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message ?? ""}
                {...register("email", { required: "Email is required" })}
            />
            
            <Input
                label="Password"
                type="password"
                error={!!errors.email}
                helperText={errors.password?.message ?? ""}
                {...register("password", { required: "Password is required" })}
            />

            <AuthButton type="submit">
                SignIn
            </AuthButton>

            <AlertPopUp 
            open={!!error}
            onClose={() => setError(null)}
            title="Error!"
            content={`${error}`}
             />
        </AuthForm>
    )
}