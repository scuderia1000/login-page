import React, {FunctionComponent} from 'react';
import './checkbox.css';
import {CheckboxProps} from "../types";

export const Checkbox: FunctionComponent<CheckboxProps> = ({isChecked = false, label, action}) => {
    return (
        <div className="input-form input-form__checkbox">
            <div className="checkbox-wrapper" onClick={() => action(!isChecked)}>
                <input className="checkbox-wrapper__checkbox" type="checkbox" checked={isChecked}
                       onChange={e => action(e.target.checked)}/>
                {label}
            </div>
        </div>
    )
};