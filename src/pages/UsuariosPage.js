import { Button, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Boton } from '../components/Boton';
import { dispatchGetUsuarios, } from '../controllers/usuarios';
import { xmlToJson } from '../helpers/xml';
import { useUsuarios } from '../hooks/useUsuarios';

export const UsuariosPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dispatchGetUsuarios());
    }, [dispatch]);
    
    const [archivo, setArchivo] = useState({
        file:''
    });
    const {file} = archivo;
    
    const {usuarios} = useSelector(state => state.users)
    const {columns,
        data,
        onClick,
        close,
        onSubmit,
        open,
        bool,
        form,
        onChange} = useUsuarios({usuarios,dispatch});

        const {usuario, email, password} = form;
    
    const onChangeFile = (e) => {
        setArchivo({
            file:e.target.files[0]
        })
    }
   
    return (
        <div >
            <Modal
          centered
          visible={open}
          closable={true}
          onCancel={close}
          okButtonProps={{block:true}}
          footer={null}
          width={350}
        >
           <form className="formularios" >
                {
                    (bool) ?<h1>Editar</h1> :<h1>Nuevo</h1>
                }
                
               
               <input type="text" name="usuario" value={usuario}  onChange={onChange} autoComplete="off"  placeholder="Usuario"  />
               <input type="text" name="email" value={email} onChange={onChange}  autoComplete="off"  placeholder="Email"  />
               {
                   (!bool) 
                   && <input type="text" name="password" value={password} onChange={onChange}  autoComplete="off"  placeholder="Contraseña"  />
               }
               
               <Button onClick={()=>onSubmit(usuario,email,password)} type='primary' >Guardar</Button>
              
           </form>
                    
                </Modal>
            <div className="flexEvenly">
            <h1>Usuarios</h1>
            {/* <div className="addDocentes">
            <h1>Agregar empleados</h1>
            <div className="file-select pointer" id="src-file2">
                <input
                    className="pointer"
                    type="file"
                    id="file"
                    name="file"
                    value={file}
                    placeholder="Seleccione archivo"
                    onChange={onChangeFile}
                />
                </div>
                <button
                     onClick={
                    xmlToJson(file)
                }
                >
                Cargar usuarios
                </button>
            </div> */}
            <Boton text='+ Usuario' backgroundColor='#00AB55' color='white' onClick={onClick} />
            </div>
             <Table columns={columns} dataSource={data} pagination={{pageSize : 5}} scroll={{ x: 300 }}/>
     
        </div>
    )
}
