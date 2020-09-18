import React, {FunctionComponent} from 'react';
import {InputProps} from "../types";
import './style/input.css';

export const Input: FunctionComponent<InputProps> = ({value, type, action}) => {
    return (
        <>
            <input className={"input"} type={type} value={value} onChange={e => action(e.target.value)}/>
        </>
    )
};