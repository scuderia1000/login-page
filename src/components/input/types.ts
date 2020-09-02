export enum InputTypes {
    TEXT = "text",
    PASSWORD = "password"
}

export interface InputProps {
    label: string,
    value: string,
    type: InputTypes,
    action: (e: string) => void
}