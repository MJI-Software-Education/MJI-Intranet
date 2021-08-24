import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { dispatchLogin } from '../controllers/auth';
import { useForm } from '../hooks/useForm'

export const LoginPage = () => {

    const dispatch = useDispatch();
    const [form, onChange] = useForm({
        email:"miguel@albanez.com",
        password:"123456"
    });

    const {email, password} = form;

    const onSubmit =(e)=>{
        e.preventDefault();

        dispatch(dispatchLogin(email,password));
    }

    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
            <h1>Login</h1>
                <input type="text"    value={email}  name="email" onChange={onChange} />
                <input type="password" value={password}  name="password" onChange={onChange} />
                <Button type="submit" color="primary" variant="contained" >Login</Button>
            </form>
        </div>
    )
}
