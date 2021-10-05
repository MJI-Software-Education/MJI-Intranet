import { Button, Select, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { unitStartLoading } from '../actions/unidades';
import { Boton } from '../components/Boton';
import { oaStartLoading } from '../controllers/oa';
import { useOA } from '../hooks/useOA';

export const OAsPage = ( ) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( oaStartLoading() );
    }, [dispatch])

    useEffect(() => {
        dispatch( unitStartLoading() );
    }, [dispatch])

    const oas = useSelector( state => state.oas.oas );

    const {unidades} = useSelector(state => state.units);

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
    } = useOA( oas, dispatch );

    const { 
        idUnidad,
        oa,
        nivel,
    } = form;

    const changeUnit = (u) => {
        setForm({
            ...form,
            idUnidad: u
        })
    }

    return (
        <>
            <Modal
                centered
                visible={open}
                closable={true}
                onCancel={close}
                okButtonProps={{block:true}}
                footer={null}
                width={550}
            >
                <form >
                    {
                        (bool) ?<h1>Editar</h1> :<h1>Nuevo</h1>
                    }
                <div className="formularios">

                    <div>
                    OA
                    <input type="text" name="oa" value={oa} onChange={onChange}  autoComplete="off"  placeholder="Ingrese OA"  />
                    </div>
                    <div>
                    Nivel
                    <input type="text" name="nivel" value={nivel} onChange={onChange}  autoComplete="off"  placeholder="Ingrese Nivel"  />
                    </div>
                    
                    {
                        (!bool) && <div><Select defaultValue='Seleccione' key={'123'} onChange={changeUnit} style={{ width: 170 }}  name="idCurso" >
                            {unidades.map(u=>(
                                <Select.Option  key={u._id} value={u._id}> {u.unidad} </Select.Option>  
                            ))}   
                        </Select></div>
                    }
                    <br />
                    </div>
                </form>
                    <Button onClick={()=>onSubmit( idUnidad, oa, nivel )} type='primary' >Guardar</Button>
                    
            </Modal>

            <div className="flexEvenly">
                <h1>OAs</h1>
                <Boton text='+ OA' backgroundColor='#00AB55' color='white' onClick = { onClick } />
            </div>

            <Table columns={columns} dataSource={data} pagination={{pageSize : 5}} scroll={{ x: 300 }}/>
        </>
    )
}
