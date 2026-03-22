import { SignIn } from "../components/auth_components/SignIn";



export function SignInPage():JSXElement{

    return (
        <SignIn  onSubmit={(data) => console.log(data)}/>
    )
}