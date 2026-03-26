import type { SignInData, User } from "../constants/authTypes";
import { addUser, getUser } from "./localStorageDAL";

type SignInResult =
  { status: "success"; user: User } | 
  { status: "user-not-found" } | 
  { status: "wrong-password" } ;

type SignUpResult = 
    {status: "success"} |
    { status: "user-already-exist" };



export function signIn({email, password}: SignInData): SignInResult {
    const user = getUser(email);

    if (!user) {
    return { status: "user-not-found" };
    }

    if (user.password !== password) {
    return { status: "wrong-password" };
    }

    return { status: "success", user };
}


export function signUp(user: User) : SignUpResult{
    const existUser = getUser(user.email);
    if (!existUser){
        addUser(user);
        return { status: "success"}
    }
    return { status: "user-already-exist"}
}