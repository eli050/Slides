import { SignUp } from "../components/auth_components/SignUp";
import { useUser } from "../components/auth_components/UserContext";
import type { SignUpData } from "../constants/authTypes";
import { signUp } from "../utils/authLogic";
import { useNavigate } from "react-router-dom";
import { changeCurrentUser } from "../utils/localStorageDAL";
import { useState } from "react";



export function SignUpPage():JSXElement{
    const navigate = useNavigate();
    const {setCurrentUser } = useUser();
    const [error, setError] = useState<string | null>(null);

    function onSubmit(data: SignUpData){
        const result = signUp(data);
        if (result.status === "user-already-exist"){
            setError("An account with this email already exists.")
            return
        }
        setCurrentUser(data);
        changeCurrentUser(data);
        navigate("/game-board");
    }

    return (
        <SignUp  onSubmit={onSubmit}  error={error}  setError={setError}/>
    )
}