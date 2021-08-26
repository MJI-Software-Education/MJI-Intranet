import { FormOutlined,DeleteOutlined } from '@ant-design/icons';
import { dispatchDeleteUsuario, dispatchEditUsuario, dispatchNewUsuario } from '../controllers/usuarios';
import { useEdit } from './useEdit';
import { useForm } from './useForm';
const initialState = {
    usuario:'',
    email:'',
    password:'',
    id:''
}
export const useUsuarios = ({usuarios, dispatch}) => {
  const [form, onChange,,setForm] = useForm({
      usuario:'',
      email:'',
      password:''
  });
  const {id} = form;
  const {edit, setEdit, visible, setVisible, onClick, onEdit, close} = useEdit({setForm,initialState});
  const {open} = visible;
  const {bool} = edit;
  const onSubmit = (usuario,email,password) => {
    if(bool){
      dispatch(dispatchEditUsuario(usuario,email,id));
    }else{
      dispatch(dispatchNewUsuario(usuario,email,password));
    }
      setVisible({open:false});
  }
  const onDelete = (id) => {
      dispatch(dispatchDeleteUsuario(id));
      setVisible({open:false});
  }
  const editar = (u)=>{
    setEdit({
      bool:true
    });
    setForm({
    
      usuario:u.usuario,
      email:u.email,
      password:u.password,
      id:u._id
    });
    
    onEdit();
  }
      
    
  const columns = [
      {
        title: 'Nombre',
        dataIndex: 'nombre',
      },
      {
        title: 'Email',
        dataIndex: 'email',
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
      

      
  const data = usuarios.map(u=>({
    key: u._id,
    nombre: u.usuario,
    email: u.email,
    estado: u.status ?<div className="true">Activo</div>:<div className="false">Baneado</div>,
    accion:[<FormOutlined key={u._id} onClick={()=>editar(u)}   className="mr"  style={{color : "#1ED760"}} />,<DeleteOutlined key={u.email} onClick={()=>onDelete(u._id)}  style={{color : "#FF0000"}} />,]

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
