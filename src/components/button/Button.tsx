import React, {FunctionComponent} from 'react';
import cn from 'classnames'
import './button.css';
import {ButtonProps} from "../types";


export const Button: FunctionComponent<ButtonProps> = ({text, isDisabled, isLoading, action}) => {
    const buttonClass = cn(
        'button',
        'button_green',
        {
            button__loading: isLoading,
            button__disabled: isDisabled
        });
    return (
        <>
            <div className={buttonClass} onClick={() => action()}>
                {text}
            </div>
        </>
    )
};