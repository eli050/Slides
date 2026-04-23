import { BaseButton } from "../styled_components/BaseButton";

type SolveButtonProps = {
    onClick: () => void;
    disabled?: boolean;
}

export function SolveButton({ onClick, disabled }: SolveButtonProps): JSXElement {
    return (
        <BaseButton onClick={onClick} disabled={disabled}>
            Solve
        </BaseButton>)
}