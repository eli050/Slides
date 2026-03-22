import { SignUp } from "../components/auth_components/SignUp";



export function SignUpPage():JSXElement{

    return (
        <SignUp  onSubmit={(data) => console.log(data)}/>
    )
}