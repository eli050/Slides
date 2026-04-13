import { AuthButton } from "../styled_components/AuthButton";
import type {User } from "../../constants/authTypes";
import { AlertPopUp } from "../AlertPopUp";
import { BaseAuthForm } from "./BaseAuthForm";
import { Button, CardHeader, DialogActions, Typography } from "@mui/material";
import { Link, useNavigate, type NavigateFunction } from "react-router-dom";
import { SIGN_UP_PATH } from "../../constants/URLpaths";
import type { Dispatch } from "react";
import { useForm } from "react-hook-form";

type SignInProps = {
    onSubmit: (user: User) => void | null;
    error: string | null;
    setError: Dispatch<React.SetStateAction<string | null>>;
}

function handleSignUpButton(setError: Dispatch<React.SetStateAction<string | null>>, navigate: NavigateFunction): void {
    setError(null);
    navigate(SIGN_UP_PATH)
}

export function SignIn({ onSubmit, error, setError }: SignInProps): JSXElement {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>()

    return (
        <BaseAuthForm
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            topChildren={
                <CardHeader title="Sign In" />
            }
            bottomChildren={
                <>
                    <AuthButton type="submit">
                        Sign In
                    </AuthButton>

                    <Typography>
                        Don't have an account yet?{" "}
                        <Link to={SIGN_UP_PATH} >Sign up</Link>
                    </Typography>

                    <AlertPopUp
                        open={!!error}
                        onClose={() => setError(null)}
                        title="Error!"
                        content={error}
                    >
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    handleSignUpButton(setError, navigate)
                                }}
                            >
                                Sign Up
                            </Button>
                        </DialogActions>
                    </AlertPopUp>
                </>
            } />
    )
}