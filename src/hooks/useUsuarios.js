import { FormOutlined,DeleteOutlined } from '@ant-design/icons';
import { dispatchDeleteUsuario, dispatchEditUsuario, dispatchNewUsuario } from '../controllers/usuarios';
import { useEdit } from './useEdit';
import { useForm } from './useForm';
const initialState = {
    usuario:'',
    email:'',
    password:'',
    nombre:'',
    apellidoP:'',
    apellidoM:'',
    run:'',
    telefono:'',
    grado:'',
    letra:'',
    rbd:'',
    id:''
}
export const useUsuarios = ({usuarios, dispatch, colegio}) => {
  const [form, onChange,,setForm] = useForm({
      usuario:'',
      email:'',
      password:'',
      nombre:'',
      apellidoP:'',
      apellidoM:'',
      run:'',
      telefono:'',
      grado:'',
      letra:'',
      rbd:'',
  });
  const {id} = form;
  const {edit, setEdit, visible, setVisible, onClick, onEdit, close} = useEdit({setForm,initialState});
  const {open} = visible;
  const {bool} = edit;
  const onSubmit = (data) => {
    if(bool){
      dispatch(dispatchEditUsuario(data,id));
    }else{
      dispatch(dispatchNewUsuario(data));
    }
      setVisible({open:false});
  }
  const onDelete = (id) => {
      dispatch(dispatchDeleteUsuario(id,colegio));
      setVisible({open:false});
  }
  const editar = (u)=>{
    setEdit({
      bool:true
    });
    setForm({
      nombre:u.nombre,
      apellidoP:u.apellidoP,
      apellidoM:u.apellidoM,
      run:u.run,
      telefono:u.telefono,
      usuario:u.usuario || '',
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
    nombre: u.nombre,
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
