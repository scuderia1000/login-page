import React, {FunctionComponent, useState} from 'react';
import {InputTypes} from "./types";
import {Button} from "./button/Button";
import {Checkbox} from "./checkbox/Checkbox";
import {InputForm} from "./input/InputForm";
import {useDispatch} from "react-redux";
import {login} from "../store/login/actions";

export const Login: FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();

    return (
        <div className={"login-form"}>
            <span className={"login-form__title"}>Login</span>
            <div className={"social-login"}>

            </div>
            <InputForm label="Email" type={InputTypes.TEXT} value={email} action={setEmail}/>
            <InputForm label="Password" type={InputTypes.PASSWORD} value={password} action={setPassword}/>
            <Checkbox isChecked={rememberMe} label="Remember me" action={setRememberMe}/>
            <Button text="LOGIN" isDisabled={false} isLoading={false}
                    action={() => dispatch(login({login: email, password: password}))}/>
        </div>
    );
};