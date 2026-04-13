import { useForm } from "react-hook-form";
import { Button, CardHeader, DialogActions, } from '@mui/material';
import { Input } from "../styled_components/Input";
import { AuthButton } from "../styled_components/AuthButton";
import {useNavigate, type NavigateFunction } from "react-router-dom";
import type { User } from "../../constants/authTypes";
import { AlertPopUp } from "../AlertPopUp";
import { BaseAuthForm } from "./BaseAuthForm";
import type { Dispatch } from "react";
import { SIGN_IN_PATH } from "../../constants/URLpaths";

type SignUpProps = {
    onSubmit: (user: User) => void;
    error: string | null;
    setError: Dispatch<React.SetStateAction<string | null>>;
}

function handleSignInButton(setError: Dispatch<React.SetStateAction<string | null>>, navigate: NavigateFunction): void {
    setError(null);
    navigate(SIGN_IN_PATH)
}

export function SignUp({ onSubmit, error, setError }: SignUpProps): JSXElement {
    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<User>()

    return (
        <BaseAuthForm
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            topChildren={
                <>
                    <CardHeader title="Sign Up" />

                    <Input
                        label="Name"
                        type="text"
                        error={!!errors.name}
                        helperText={errors.name?.message ?? ""}
                        {...register("name", { required: "Name is required" })}
                    />
                </>}
            bottomChildren={
                <>
                    <AuthButton type="submit">
                        Sign Up
                    </AuthButton>

                    <AlertPopUp
                        open={!!error}
                        onClose={() => setError(null)}
                        title="Error!"
                        content={error}
                    >
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    handleSignInButton(setError, navigate)
                                }}
                            >
                                Sign In
                            </Button>
                        </DialogActions>
                    </AlertPopUp>
                </>}
                />
    )
}