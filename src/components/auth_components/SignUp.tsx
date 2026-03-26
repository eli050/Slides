import { useForm } from "react-hook-form";
import { AuthForm } from "../styled_components/AuthForm";
import { Button, CardHeader, DialogActions } from '@mui/material';
import { Input } from "../styled_components/Input";
import { AuthButton } from "../styled_components/AuthButton";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import type { SignUpData } from "../../constants/authTypes";
import { AlertPopUp } from "../AlertPopUp";

type SignUpProps = {
    onSubmit: (data:SignUpData) => void;
    error: string|null;
    setError: React.Dispatch<React.SetStateAction<string|null>>;
}

export function SignUp({onSubmit, error, setError}:SignUpProps):JSXElement{
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<SignUpData>()

    return (
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <CardHeader title="Sign Up" />
            
            <Input
                label="Name"
                type="text"
                error={!!errors.name}
                helperText={errors.name?.message ?? ""}
                {...register("name", { required: "Name is required" })}
            />

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
                SignUp
            </AuthButton>

            <Typography>
                You already have an account?{" "}
                <Link to="/sign-in" >Sign in</Link>
            </Typography>
            <AlertPopUp 
                open={!!error}
                onClose={() => setError(null)}
                title="Error!"
                content={`${error}`}
            >
                <DialogActions>
                    <Button
                    onClick={() => {
                        setError(null);
                        navigate("/sign-in")
                    }}
                    >
                        Sign In
                    </Button>
                </DialogActions>  
            </AlertPopUp>
        </AuthForm>
    )
}