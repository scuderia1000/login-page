import React from 'react';
import {InputProps} from "./types";

export const Input = ({label, value, type, action}: InputProps) => {
    return (
        <div className={"input-form"}>
            <label className={"input-form__label"}>{label}</label>
            <input className={"input-form__input"} type={type} value={value} onChange={e => action(e.target.value)}/>
        </div>
    )
};