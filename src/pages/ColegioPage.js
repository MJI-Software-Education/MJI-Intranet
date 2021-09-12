import { Button, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Boton } from '../components/Boton';
import { dispatchGetColegios } from '../controllers/colegio';
import { useColegios } from '../hooks/useColegio';

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
    onChange
    } = useColegios({colegios,dispatch})
    const {rbd, nombre} = form;
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

               <input type="text" name="rbd" value={rbd}  onChange={onChange} autoComplete="off"  placeholder="rbd"  />
               <input type="text" name="nombre" value={nombre} onChange={onChange}  autoComplete="off"  placeholder="nombre"  />
              
               
               <Button onClick={()=>onSubmit(rbd,nombre)} type='primary' >Guardar</Button>
              
           </form>
                    
                </Modal>
            <div className="flexEvenly">
            <h1>Colegios</h1>
            <Boton text='+ Colegio' backgroundColor='#00AB55' color='white' onClick={onClick} />
            </div>
            <Table columns={columns} dataSource={data} pagination={{pageSize : 5}} scroll={{ x: 300 }}/>
        </div>
    )
}