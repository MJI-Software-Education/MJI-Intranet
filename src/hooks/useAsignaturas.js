import { FormOutlined,DeleteOutlined } from '@ant-design/icons';
import { dispatcDeleteAsignatura, dispatchEditAsignatura, dispatchNewAsignatura } from '../controllers/asignaturas';
import { useEdit } from './useEdit';
import { useForm } from './useForm';
const initialState = {
  grado:'',
  asignatura:'',
  cod:'',
  id:''
}
export const useAsignaturas = ({asignaturas, dispatch}) => {
  const [form, onChange,,setForm] = useForm({
    grado:'',
    cod:'',
    asignatura:'',
});
const {id} = form;
  const {edit, setEdit, visible, setVisible, onClick, onEdit, close} = useEdit({setForm,initialState});
  const {open} = visible;
  const {bool} = edit;
    const onSubmit = (grado,cod,asignatura) => {
      if(bool){
          dispatch(dispatchEditAsignatura(grado,asignatura,id));
        }else{
          dispatch(dispatchNewAsignatura(grado,cod,asignatura));
      }
        setVisible({open:false});
    }
    const onDelete = (id) => {
        dispatch(dispatcDeleteAsignatura(id));
        setVisible({open:false});
    }
    const editar = (a)=>{
      setEdit({
        bool:true
      });
      setForm({
        grado:a.idCurso.grado,
        cod:a.codAsignatura,
        asignatura:a.asignatura,
        id:a.id
      });
      
      onEdit();
    }
      
    
    const columns = [
        {
          title: 'Curso',
          dataIndex: 'curso',
        },
        {
          title: 'Asignatura',
          dataIndex: 'asignatura',
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
      

      
    const data = asignaturas.map(a=>({
    key: a.id,
    curso:a.idCurso.curso,
    asignatura: a.asignatura,
    estado: a.status ?<div className="true">Activo</div>:<div className="false">Inactivo</div>,
    accion:[<FormOutlined key={a.id} onClick={()=>editar(a)}   className="mr"  style={{color : "#1ED760"}} />,<DeleteOutlined key={`${a.id}${a.asignatura}`} onClick={()=>onDelete(a.id)}  style={{color : "#FF0000"}} />,]
    
    
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
    setForm,
    onChange
  };
}
