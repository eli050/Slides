

type FormProps = {
    onSubmit: (data:any) => void;
    children: React.ReactNode;
    className?: string|null;
}

export function Form({onSubmit, children, className = null}:FormProps):JSXElement{

    return (
        <form 
        onSubmit={onSubmit}
        className={className? className : "FormComponent"}
        >
            {children}
        </form>
    )
}