import React, {FunctionComponent} from 'react';
import {InputFormProps, InputTypes} from "../types";
import {PasswordLabel} from "../label/PasswordLabel";
import {Label} from "../label/Label";
import './style/input-form.css';
import {Input} from "./Input";

export const InputForm: FunctionComponent<InputFormProps> = ({label, value, type, action}) => {
    return (
        <div className={"input-form"}>
            {type === InputTypes.PASSWORD ? <PasswordLabel label={label}/> : <Label label={label}/>}
            <Input type={type} value={value} action={action}/>
        </div>
    )
};