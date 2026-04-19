import { InputAdornment } from "@mui/material";
import { AuthForm } from "../styled_components/AuthForm";
import { Input } from "../styled_components/Input";
import { TransparentButton } from "../styled_components/TransparentButton";
import {
    type UseFormHandleSubmit, 
    type UseFormRegister,
    type FieldErrors,
    type Path, 
    type FieldValues} from "react-hook-form";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type BaseAuthFormProps<T extends FieldValues> = {
  onSubmit: (data: T) => void;
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors<T>;
  topChildren?: React.ReactNode;
  bottomChildren?: React.ReactNode;
};

export function BaseAuthForm<T extends FieldValues>({ 
    onSubmit,
    topChildren,
    bottomChildren,
    register,
    handleSubmit,
    errors }: BaseAuthFormProps<T>): JSXElement {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
            {topChildren}
            <Input
                label="Email"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message as string ?? ""}
                {...register("email" as Path<T>,  { required: "Email is required" })}
            />

            <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors.password?.message as string ?? ""}
                {...register("password" as Path<T>, { required: "Password is required" })}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <TransparentButton
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </TransparentButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            {bottomChildren}
        </AuthForm>
    )
}