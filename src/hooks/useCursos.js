import { FormOutlined,DeleteOutlined } from '@ant-design/icons';
import { dispatchDeleteCurso, dispatchEditCurso, dispatchNewCurso } from '../controllers/cursos';
import { useEdit } from './useEdit';
import { useForm } from './useForm';
const initialState = {
  letra:'',
  grado:'',
  curso:'',
  id:''
}
export const useCursos = ({cursos, dispatch}) => {
  const [form, onChange,,setForm] = useForm({
    letra:'',
    grado:'',
    curso:'',
});
const {id} = form;
  const {edit, setEdit, visible, setVisible, onClick, onEdit, close} = useEdit({setForm,initialState});
  const {open} = visible;
  const {bool} = edit;
    const onSubmit = (letra,grado,curso) => {
      if(bool){
          dispatch(dispatchEditCurso(letra,grado,curso,id));
        }else{
          dispatch(dispatchNewCurso(letra,grado,curso));
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
        grado:c.grado,
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
          grado: 'Grado',
          dataIndex: 'grado',
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
    grado: c.grado,
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
