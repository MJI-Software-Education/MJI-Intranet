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
        const {grado,cod,asignatura} = form;
        
        const changeCurso = (e)=>{
           setForm({
               ...form,
               grado:e
           })
           console.log(e)
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
                width={550}
            >
                {
                    (bool) ?<h1>Editar</h1> :<h1>Nuevo</h1>
                }
           <form >
           <div className="formularios">

              <div>
                Asignatura
               <input type="text" name="asignatura" value={asignatura} onChange={onChange}  autoComplete="off"  placeholder="Asignatura"  />
              </div>
               {
                    (!bool) && <div>Código<input type="text" name="cod" value={cod} onChange={onChange}  autoComplete="off"  placeholder="Código"  /></div>
                }
               
               {
                    (!bool) && <div>Curso<Select defaultValue='Seleccione' key={'123'} onChange={changeCurso}   style={{ width: 170 }}  name="grado" >
                        {cursos.map(c=>(
                            <Select.Option  key={c.id}   value={c.grado}  >{c.curso}-{c.letra}</Select.Option>  
                        ))}   
                    </Select></div>
                }
                <br/>
               
               
              
                    </div>
               <Button className="mt" onClick={()=>onSubmit(grado,cod,asignatura)} type='primary' >Guardar</Button>
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
