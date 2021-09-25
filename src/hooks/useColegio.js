import { FormOutlined,DeleteOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { dispatchNewColegio, dispatchEditColegio, dispatchDeleteColegio } from '../controllers/colegio';
import { useEdit } from './useEdit';
import { useForm } from './useForm';
const initialState = {
  rbd:'',
  nombre:'',
  id:''
}
export const useColegios = ({colegios, dispatch}) => {
  const [form, onChange,,setForm] = useForm({
    rbd:'',
    nombre:'',
});
const {id} = form;
  const {edit, setEdit, visible, setVisible, onClick, onEdit, close} = useEdit({setForm,initialState});
  const {open} = visible;
  const {bool} = edit;
  const [employess, setEmployess] = useState({
    addEmployees:false
  });
    const onSubmit = (rbd,nombre) => {
      if(bool){
          dispatch(dispatchEditColegio(rbd,nombre,id));
        }else{
          dispatch(dispatchNewColegio(rbd,nombre));
      }
        setVisible({open:false});
    }
    const onDelete = (id) => {
        dispatch(dispatchDeleteColegio(id));
        setVisible({open:false});
    }
    const editar = (c)=>{
      setEdit({
        bool:true
      });
      setForm({
        rbd:c.rbd,
        nombre:c.nombre,
        id:c.id
      });
      
      onEdit();
    }
    const sumarEmpleados = (c)=>{
      setEmployess({
        addEmployees:true
      });
      setForm({
        id:c.id
      });
    }
    const closeEmployees = (c)=>{
      setEmployess({
        addEmployees:false
      });
    }
      
    
    const columns = [
        {
          title: 'Rbd',
          dataIndex: 'rbd',
        },
        {
          title: 'Nombre',
          dataIndex: 'nombre',
        },
        {
          title: 'Estado',
          dataIndex: 'estado',
        },
        {
          title: 'Acción',
          dataIndex: 'accion',
        },
        
      ];
      

      
    const data = colegios.map(c=>({
    key: c.id,
    rbd: c.rbd,
    nombre: c.nombre,
    estado: c.status ?<div className="true">Activo</div>:<div className="false">Inactivo</div>,
    accion:[<FormOutlined key={c.id} onClick={()=>editar(c)}   className="mr"  style={{color : "#1ED760"}} />,<DeleteOutlined key={c.rbd} onClick={()=>onDelete(c.id)}  style={{color : "#FF0000"}} />,<UsergroupAddOutlined key={c.nombre} onClick={()=>sumarEmpleados(c)}  style={{color : "#1199F6"}} />]
    
    
  }))

  return {
    columns,
    data,
    onClick,
    close,
    onSubmit,
    open,
    bool,
    form,
    onChange,
    sumarEmpleados,
    closeEmployees,
    employess
  };
}
