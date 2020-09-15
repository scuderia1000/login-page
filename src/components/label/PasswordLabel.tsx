import React, {FunctionComponent} from 'react';
import './label.css';

export const PasswordLabel: FunctionComponent<{label: string, linkText?: string}> = ({label, linkText = 'Forgot password?'}) => {
    return (
        <div className="label-wrapper">
            <label className={"label"}>{label}</label>
            <a className="link_dotted" href="/">{linkText}</a>
        </div>
    )
};