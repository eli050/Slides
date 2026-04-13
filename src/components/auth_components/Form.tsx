
const DEFAULT_CLASS_NAME = "FormComponent"

type FormProps = {
    onSubmit: (data: any) => void;
    children: React.ReactNode;
    className?: string;
}

export function Form({ onSubmit, children, className = DEFAULT_CLASS_NAME }: FormProps): JSXElement {
    return (
        <form
            onSubmit={onSubmit}
            className={className}
        >
            {children}
        </form>
    )
}