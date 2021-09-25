import { Button, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Boton } from '../components/Boton';
import { dispatchGetCursos } from '../controllers/cursos';
import { useCursos } from '../hooks/useCursos';

export const CursosPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dispatchGetCursos());       
    }, [dispatch])
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
    onChange
    } = useCursos({cursos,dispatch})
    const {curso, letra, grado} = form;
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

               <input type="text" name="curso" value={curso}  onChange={onChange} autoComplete="off"  placeholder="curso"  />
               <input type="text" name="letra" value={letra} onChange={onChange}  autoComplete="off"  placeholder="letra"  />
               <input type="text" name="grado" value={grado} onChange={onChange}  autoComplete="off"  placeholder="grado"  />
              
               
               <Button onClick={()=>onSubmit(letra,grado,curso)} type='primary' >Guardar</Button>
              
           </form>
                    
                </Modal>
            <div className="flexEvenly">
            <h1>Cursos</h1>
            <Boton text='+ Curso' backgroundColor='#00AB55' color='white' onClick={onClick} />
            </div>
            <Table columns={columns} dataSource={data} pagination={{pageSize : 5}} scroll={{ x: 300 }}/>
        </div>
    )
}
