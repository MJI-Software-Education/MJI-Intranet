import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { dispatchLogout } from '../controllers/auth';

export const NavBar = () => {
    const dispatch = useDispatch();
    const onClick = ()=>{
        dispatch(dispatchLogout());
    }
    
    return (
        <div className="fondo">
            <nav>
                <div>
                    <h1>MJI</h1>
                </div>
                <Button onClick={onClick} type="danger" >Logout</Button>
            </nav>
        </div>
    )
}
