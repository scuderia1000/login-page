import React, {FunctionComponent} from 'react';
import {InputProps, InputTypes} from "./types";
import {PasswordLabel} from "../label/PasswordLabel";
import {Label} from "../label/Label";
import './input.css';

export const Input: FunctionComponent<InputProps> = ({label, value, type, action}) => {
    return (
        <div className={"input-form"}>
            {type === InputTypes.PASSWORD ? <PasswordLabel label={label}/> : <Label label={label}/>}
            <input className={"input-form__input"} type={type} value={value} onChange={e => action(e.target.value)}/>
        </div>
    )
};