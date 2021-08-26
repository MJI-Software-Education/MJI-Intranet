import { FormOutlined,DeleteOutlined } from '@ant-design/icons';
import { dispatchDeleteCurso, dispatchEditCurso, dispatchNewCurso } from '../controllers/cursos';
import { useEdit } from './useEdit';
import { useForm } from './useForm';
const initialState = {
  letra:'',
  curso:'',
  id:''
}
export const useCursos = ({cursos, dispatch}) => {
  const [form, onChange,,setForm] = useForm({
    letra:'',
    curso:'',
});
const {id} = form;
  const {edit, setEdit, visible, setVisible, onClick, onEdit, close} = useEdit({setForm,initialState});
  const {open} = visible;
  const {bool} = edit;
    const onSubmit = (letra,curso) => {
      if(bool){
          dispatch(dispatchEditCurso(letra,curso,id));
        }else{
          dispatch(dispatchNewCurso(letra,curso));
      }
        setVisible({open:false});
    }
    const onDelete = (id) => {
        dispatch(dispatchDeleteCurso(id));
        setVisible({open:false});
    }
    const editar = (c)=>{
      setEdit({
        bool:true
      });
      setForm({
        letra:c.letra,
        curso:c.curso,
        id:c.id
      });
      
      onEdit();
    }
      
    
    const columns = [
        {
          title: 'Curso',
          dataIndex: 'curso',
        },
        {
          title: 'Letra',
          dataIndex: 'letra',
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
      

      
    const data = cursos.map(c=>({
    key: c.id,
    curso: c.curso,
    letra: c.letra,
    estado: c.status ?<div className="true">Activo</div>:<div className="false">Inactivo</div>,
    accion:[<FormOutlined key={c.id} onClick={()=>editar(c)}   className="mr"  style={{color : "#1ED760"}} />,<DeleteOutlined key={`${c.id}${c.curso}`} onClick={()=>onDelete(c.id)}  style={{color : "#FF0000"}} />,]
    
    
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
    onChange
  };
}
