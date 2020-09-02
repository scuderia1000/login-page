import React, {useState} from 'react';
import {Input} from "./input/Input";
import {InputTypes} from "./input/types";

export const Login = () => {
    const [email, setEmail] = useState('');
    return (
        <div className={"login-form"}>
            <span className={"login-form__title"}>Login</span>
            <div className={"social-login"}>

            </div>
            <Input label="Email" type={InputTypes.TEXT} value={email} action={setEmail}/>
        </div>
    );
};