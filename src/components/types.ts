export enum InputTypes {
    TEXT = "text",
    PASSWORD = "password"
}

export interface InputProps {
    value: string,
    type: InputTypes,
    action: (e: string) => void
}

export interface InputFormProps extends InputProps{
    label: string,
}

export interface CheckboxProps {
    isChecked: boolean,
    label: string,
    action: (e: boolean) => void
}

export interface ButtonProps {
    isLoading: boolean,
    isDisabled: boolean,
    text: string,
    action: () => void
}