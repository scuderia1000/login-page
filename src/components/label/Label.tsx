import React, {FunctionComponent} from 'react';
import './label.css';
import cn from "classnames";

export const Label: FunctionComponent<{label: string, classNames?: string[]}> = ({label, classNames = []}) => {
    const labelClass = cn(
        'label',
        ...classNames
        );
    return (
        <>
            <label className={labelClass}>{label}</label>
        </>
    )
};