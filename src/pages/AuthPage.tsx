import { useState } from "react";
import { useUser } from "../components/auth_components/UserContext";
import { useNavigate } from "react-router-dom";
import { STAGES, type User } from "../constants/authTypes";
import { signIn, signUp } from "../utils/authLogic";
import { changeCurrentUser } from "../utils/localStorageDAL";
import { GAME_BOARD_PATH } from "../constants/URLpaths";
import { SignIn } from "../components/auth_components/SignIn";
import { SignUp } from "../components/auth_components/SignUp";

type AuthPageProps = {
    stage: "sign-in" | "sign-up"
}

export function AuthPage({ stage }: AuthPageProps): JSXElement {
    const [error, setError] = useState<string | null>(null);
    const { setCurrentUser } = useUser();
    const navigate = useNavigate();

    function onSubmit(data: User) {
        const result = (stage === STAGES.SIGN_IN_STAGE) ? signIn(data) : signUp(data);

        if (result.status !== "success") {
            setError(result.message);
            return;
        }
        setCurrentUser(result.user);
        changeCurrentUser(result.user);
        navigate(GAME_BOARD_PATH);
    }

    return (
        (stage === STAGES.SIGN_IN_STAGE) ?
            <SignIn onSubmit={onSubmit} error={error} setError={setError} />
            :
            <SignUp onSubmit={onSubmit} error={error} setError={setError} />

    )
}