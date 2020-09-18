import React, {FunctionComponent} from 'react';
import cn from 'classnames'
import './button.css';


export const Button: FunctionComponent<{ text: string, type?: string }> = ({text, type = "submit"}) => {
    const buttonClass = cn(
        'button',
        'button_green',
        {
            button_submit: type === "submit"
        });
    return (
        <>
            <input className={buttonClass} type={type} value={text}/>
        </>
    )
};