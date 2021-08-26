import { Button, Select, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Boton } from '../components/Boton';
import { dispatchGetAsignaturas } from '../controllers/asignaturas';
import { dispatchGetCursos } from '../controllers/cursos';
import { useAsignaturas } from '../hooks/useAsignaturas';


export const AignaturasPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dispatchGetAsignaturas());
    }, [dispatch]);
    useEffect(() => {
        dispatch(dispatchGetCursos());
    }, [dispatch]);
    const {asignaturas} = useSelector(state => state.asignaturas);
    const {cursos} = useSelector(state => state.cursos);
    const {
        columns,
        data,
        onClick,
        close,
        onSubmit,
        open,
        bool,
        form,
        setForm,
        onChange
        } = useAsignaturas({asignaturas,dispatch})
        const {idCurso, asignatura} = form;
        
        const changeCurso = (e)=>{
           setForm({
               ...form,
               idCurso:e
           })
 
        }
        
    return (
        <div>
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

              
               <input type="text" name="asignatura" value={asignatura} onChange={onChange}  autoComplete="off"  placeholder="Asignatura"  />
               {
                    (!bool) && <Select defaultValue='Seleccione' key={'123'} onChange={(e)=>changeCurso(e)}   style={{ width: 170 }}  name="idCurso" >
                    {cursos.map(c=>(
                        <Select.Option  key={c.id}   value={c.id}  >{c.curso}-{c.letra}</Select.Option>  
                    ))}   
                </Select>
                }
                <br/>
               
               
               <Button onClick={()=>onSubmit(idCurso,asignatura)} type='primary' >Guardar</Button>
              
           </form>
                    
                </Modal>
            <div className="flexEvenly">
            <h1>Aisgnaturas</h1>
            <Boton text='+ Asignatura' backgroundColor='#00AB55' color='white' onClick={onClick} />
            </div>
            <Table columns={columns} dataSource={data} pagination={{pageSize : 5}} scroll={{ x: 300 }}/>
        </div>
    )
}
