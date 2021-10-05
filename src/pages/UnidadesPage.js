import React, { useEffect } from 'react';
import { Modal, Select, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { unitStartLoading } from '../actions/unidades';
import { useUnits } from '../hooks/useUnits';
import { Boton } from '../components/Boton';
import { Button } from 'antd/lib/radio';
import { dispatchGetAsignaturas } from '../controllers/asignaturas';

export const UnidadesPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( unitStartLoading() );
    }, [dispatch])

    useEffect(() => {
        dispatch( dispatchGetAsignaturas() );
    }, [dispatch])

    const units = useSelector( state => state.units.unidades );

    const {asignaturas} = useSelector(state => state.asignaturas);
    
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
    } = useUnits( units, dispatch );

    const { idAsignatura, unidad } = form;

    const changeAsign = (a) => {

        setForm({
            ...form,
            idAsignatura: a
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
                    {
                        (bool) ?<h1>Editar</h1> :<h1>Nuevo</h1>
                    }
                <form  >
                <div className="formularios">
                    <div>
                    Unidad
                    <input type="text" name="unidad" value={unidad} onChange={onChange}  autoComplete="off"  placeholder="Ingrese Unidad"  />
                    </div>
                    

                    {
                        (!bool) && <div>Asignatura<Select  defaultValue='Seleccione' key={'123'} onChange={changeAsign} style={{ width: 170 }}  name="idCurso" >
                            {asignaturas.map(a=>(
                                <Select.Option  key={a.id} value={a.id}> {a.asignatura} </Select.Option>  
                            ))}   
                        </Select></div>
                    }
                    <br />

                    
                </div>
                    <Button   onClick={()=>onSubmit( idAsignatura, unidad )} type='primary' >Guardar</Button>
                </form>
            </Modal>

            <div className="flexEvenly">
                <h1>Unidades</h1>
                <Boton text='+ Unidad' backgroundColor='#00AB55' color='white' onClick = { onClick } />
            </div>

            <Table columns={columns} dataSource={data} pagination={{pageSize : 5}} scroll={{ x: 300 }}/>
        </>
    )
}
