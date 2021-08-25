import { useState } from "react";

export const useForm = (initialState = {})=>{

    const [state, setState] = useState(initialState);

    const reset = ()=>{
        setState(initialState);
    }

    const onChange =({target})=>{
        setState({
            ...state,
            [target.name]: target.value
        });
       
    }

    return [state, onChange, reset,setState];

}