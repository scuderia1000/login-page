import React, {FunctionComponent, useState} from 'react';
import {Input} from "./input/Input";
import {InputTypes} from "./input/types";
import {Button} from "./button/Button";
import {Checkbox} from "./checkbox/Checkbox";

export const Login: FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={"login-form"}>
            <span className={"login-form__title"}>Login</span>
            <div className={"social-login"}>

            </div>
            <Input label="Email" type={InputTypes.TEXT} value={email} action={setEmail}/>
            <Input label="Password" type={InputTypes.PASSWORD} value={password} action={setPassword}/>
            <Checkbox isChecked={true} label="Remember me"/>
            <Button text="LOGIN"/>
        </div>
    );
};