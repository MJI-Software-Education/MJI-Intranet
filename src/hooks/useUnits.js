import { FormOutlined,DeleteOutlined } from '@ant-design/icons';
import { unitStartAddNew, unitStartDelete, unitStartUpdate } from '../actions/unidades';
import { useEdit } from './useEdit';
import { useForm } from './useForm';

const initialState = {
    unidad:'',
    estado:'',
    id:''
}

export const useUnits = ( units = [], dispatch ) => {

    const [form, onChange,,setForm] = useForm({
        unidad:'',
        estado: false
    });

    const {id} = form;
    const {edit, setEdit, visible, setVisible, onClick, onEdit, close} = useEdit({setForm,initialState});
    const {open} = visible;
    const {bool} = edit;

    const columns = [
        {
            title: 'Unidad',
            dataIndex: 'unidad',
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

    const onSubmit = ( idAsignatura, unidad) => {
        if(bool){

            dispatch( unitStartUpdate( unidad, id, idAsignatura ) );

        }else{

            dispatch( unitStartAddNew( idAsignatura, unidad ) );
            
        }

          setVisible({open:false});
    }

    const onDelete = (id) => {
        dispatch( unitStartDelete( id ) )
        setVisible({open:false});
    }

    const editar = (u)=>{
        setEdit({
          bool:true
        });
        setForm({
        
            idAsignatura: u.idAsignatura,
            unidad:u.unidad,
            estado:u.status,
            id:u._id

        });
        
        onEdit();
      }
    
    const data = units.map(
        ( u, index ) => ({
            key: u._id,
            unidad: u.unidad,
            estado: u.status ? <div className="true">Activo</div>:<div className="false">Inactivo</div>,
            accion: [<FormOutlined key={u._id} onClick={()=>editar(u)} className="mr"  style={{color : "#1ED760"}} />,<DeleteOutlined key={ index } onClick={()=>onDelete(u._id)}  style={{color : "#FF0000"}} />,]
        })
    );

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
