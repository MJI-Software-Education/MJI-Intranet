const baseURL = 'http://localhost:8080/api';

export const fetchSinToken = async(endpoint, data ={}, method ='GET') => {
    const conexion = localStorage.getItem('conexion') || '';
    data.conexion = conexion;
    const url = `${baseURL}/${endpoint}`;
    if(method === 'GET'){
        const resp = await fetch(url);
        return await resp.json();
    }else{
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        return await resp.json();
    }
}
export const fetchConToken = async(endpoint, data = {conexion:''}, method ='GET') => {
    const conexion = localStorage.getItem('conexion') || '';
    console.log(conexion)
    data.conexion = conexion;
    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token');
    if(method === 'GET'){
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token
            },
            
        });
        return await resp.json();
    }else {
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token
            },
            body:JSON.stringify(data)
        });
        return await resp.json();
    }
}