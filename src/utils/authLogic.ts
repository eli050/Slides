import type { User } from "../constants/authTypes";
import { addUser, getUser } from "./localStorageDAL";

type SignInResult =
    { status: "success"; user: User; } |
    { status: "user-not-found"; message: "User does not exist"; } |
    { status: "wrong-password"; message: "Wrong password"; };

type SignUpResult =
    { status: "success", user: User } |
    { status: "user-already-exist"; message: "An account with this email already exists"; };

export function signIn({ email, password }: User): SignInResult {
    const user = getUser(email);

    if (!user) {
        return { status: "user-not-found", message: "User does not exist" };
    }

    if (user.password !== password) {
        return { status: "wrong-password", message: "Wrong password" };
    }

    return { status: "success", user };
}

export function signUp(user: User): SignUpResult {
    const existUser = getUser(user.email);

    if (!existUser) {
        addUser(user);
        return { status: "success", user }
    }

    return { status: "user-already-exist", message: "An account with this email already exists" }
}