import React, {FunctionComponent} from 'react';
import './label.css';

export const Label: FunctionComponent<{label: string}> = ({label}) => {
    return (
        <>
            <label className={"label"}>{label}</label>
        </>
    )
};