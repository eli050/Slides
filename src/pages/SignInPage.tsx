import { useState } from "react";
import { SignIn } from "../components/auth_components/SignIn";
import { signIn } from "../utils/authLogic";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/auth_components/UserContext";
import type { SignInData } from "../constants/authTypes";
import { changeCurrentUser } from "../utils/localStorageDAL";

export function SignInPage():JSXElement{
    const [error, setError] = useState<string | null>(null);
    const {setCurrentUser } = useUser();
    const navigate = useNavigate();

    function onSubmit(data: SignInData) {
        const result = signIn(data);

        if (result.status === "user-not-found") {
            setError("User does not exist");
            return;
        }

        if (result.status === "wrong-password") {
            setError("Wrong password");
            return;
        }

        setCurrentUser(result.user);
        changeCurrentUser(result.user);
        navigate("/game-board");
    }

    return (
        <SignIn  onSubmit={onSubmit} error={error}  setError={setError}/>
    )
}