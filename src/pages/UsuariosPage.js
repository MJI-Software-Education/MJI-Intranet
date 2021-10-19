import { Button, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Boton } from '../components/Boton';
import { dispatchGetColegiosActive } from '../controllers/activos';
import { dispatchGetUsuarios, } from '../controllers/usuarios';
import { useUsuarios } from '../hooks/useUsuarios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 320,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export const UsuariosPage = () => {
    const [colegio, setColegio] = useState('MJIServer');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dispatchGetUsuarios(colegio));
    }, [colegio]);
    useEffect(() => {
        dispatch(dispatchGetColegiosActive());       
    }, [dispatch]);

    const {activos:colegios} = useSelector(state=>state.activos);
    const {usuarios} = useSelector(state => state.users);
    const {columns,
        data,
        onClick,
        close,
        onSubmit,
        open,
        bool,
        form,
        onChange} = useUsuarios({usuarios,dispatch,colegio});

        const {nombre,apellidoP,apellidoM,run,telefono,grado,letra,rbd,usuario, email, password} = form;
    
        const classes = useStyles();
  
        const handleChange = (event) => {
            setColegio(event.target.value);
        };
    return (
        <div >
            <Modal
          centered
          visible={open}
          closable={true}
          onCancel={close}
          okButtonProps={{block:true}}
          footer={null}
          width={550}
        >
                {
                    (bool) ?<h1>Editar</h1> :<h1>Nuevo</h1>
                }
           <form >
               <div className ="formularios">
               <div>Nombre
               <input type="text" name="nombre" value={nombre}  onChange={onChange} autoComplete="off"    />
               </div>
               <div>
                Email
               <input type="text" name="email" value={email} onChange={onChange}  autoComplete="off"    />
               </div>
               <div>
                Apellido paterno
               <input type="text" name="apellidoP" value={apellidoP} onChange={onChange}  autoComplete="off"    />
               </div>
               <div>
                Apellido materno
               <input type="text" name="apellidoM" value={apellidoM} onChange={onChange}  autoComplete="off"    />
               </div>
               <div>
                Run
               <input type="text" name="run" value={run} onChange={onChange}  autoComplete="off"    />
               </div>
               <div>
                Telefono
               <input type="text" name="telefono" value={telefono} onChange={onChange}  autoComplete="off"    />
               </div>
              
               
               {
                   (!bool) 
                   && 
                   <>
                    <div>
                    Grado
               <input type="text" name="grado" value={grado} onChange={onChange}  autoComplete="off"    />
               </div>
               <div>
                Letra
               <input type="text" name="letra" value={letra} onChange={onChange}  autoComplete="off"    />
               </div>
               <div>
                Usuario
               <input type="text" name="usuario" value={usuario} onChange={onChange}  autoComplete="off"    />
               </div>
               <div>
                RBD
               <input type="text" name="rbd" value={rbd} onChange={onChange}  autoComplete="off"    />
               </div>
                   <div>
                       Password
                       <input type="text" name="password" value={password} onChange={onChange}  autoComplete="off"    />
                   </div></>
               }
               
               </div>
               <div className="end">
               <Button onClick={()=>onSubmit({nombre,apellidoP,apellidoM,run,telefono,grado,letra,rbd,usuario, email, password,organizacion:colegio})} type='primary' >Guardar</Button>
               </div>
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
                                <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">Curso</InputLabel>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={colegio}
                            onChange={handleChange}
                            >
                            <MenuItem value="MJIServer">
                                <em>MJI</em>
                            </MenuItem>
                            {
                                colegios.map(colegio=>(
                                    <MenuItem key={colegio.id} value={colegio.nombre.replace(/ /g, "")}>{colegio.nombre}</MenuItem>
                                ))
                            }
                            </Select>
                        </FormControl>
            <Boton text='+ Usuario' backgroundColor='#00AB55' color='white' onClick={onClick} />
            </div>
             <Table columns={columns} dataSource={data} pagination={{pageSize : 5}} scroll={{ x: 300 }}/>
     
        </div>
    )
}
