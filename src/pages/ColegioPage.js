import { Button, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Boton } from '../components/Boton';
import { dispatchGetColegios } from '../controllers/colegio';
import { useColegios } from '../hooks/useColegio';
import  Inputxs  from '../components/Inputxs';
import CargarColegios from '../components/CargarColegios';

export const ColegioPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dispatchGetColegios());       
    }, [dispatch])
    const {colegios} = useSelector(state => state.colegios);
    const {
    columns,
    data,
    onClick,
    close,
    onSubmit,
    open,
    bool,
    form,
    onChange,
    closeEmployees,
    employess
    } = useColegios({colegios,dispatch})
    const {rbd, nombre,id} = form;
    const {addEmployees} = employess;
    
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
           <form  >
           <div className="formularios">
                
                <div>
                RBD
               <input type="text" name="rbd" value={rbd}  onChange={onChange} autoComplete="off"  placeholder="rbd"  />
                </div>
                <div>
                Nombre
               <input type="text" name="nombre" value={nombre} onChange={onChange}  autoComplete="off"  placeholder="nombre"  />
                </div>
              
               
              </div>
               <Button onClick={()=>onSubmit(rbd,nombre)} type='primary' >Guardar</Button>
           </form>
                    
                </Modal>
            <Modal
          centered
          visible={addEmployees}
          closable={true}
          onCancel={closeEmployees}
          okButtonProps={{block:true}}
          footer={null}
          width={350}
        >  
        <div >
            
                    <Inputxs dispatch={dispatch} idColegio={id} organizacion={nombre} rbd={rbd} closeEmployees={closeEmployees}/> 
        </div>
  
                </Modal>
            <div className="flexEvenly">
                <div>
                    <h1>Colegios</h1>
                    <CargarColegios dispatch={dispatch} />
                </div>
            <Boton text='+ Colegio' backgroundColor='#00AB55' color='white' onClick={onClick} />
            </div>
            <Table columns={columns} dataSource={data} pagination={{pageSize : 5}} scroll={{ x: 300 }}/>
        </div>
    )
}