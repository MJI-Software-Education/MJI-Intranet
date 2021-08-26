import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { oaStartAddNew, oaStartDelete, oaStartUpdate } from "../controllers/oa";
import { useEdit } from "./useEdit";
import { useForm } from "./useForm";

const initialState = {
    idUnidad: '',
    oa: '',
    nivel: '',
    estado:'',
    id:''
}

export const useOA = ( oas = [], dispatch ) => {

    const [form, onChange,,setForm] = useForm({
        idUnidad: '',
        oa: '',
        nivel: '',
        estado: '',
    });
    
    const {id} = form;
    const {edit, setEdit, visible, setVisible, onClick, onEdit, close} = useEdit({setForm,initialState});
    const {open} = visible;
    const {bool} = edit;

    const columns = [
        {
            title: 'OA',
            dataIndex: 'oa',
        },
        {
            title: 'Nivel',
            dataIndex: 'nivel',
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

    const onSubmit = (idUnidad, oa, nivel) => {
        if(bool){

            dispatch( oaStartUpdate( idUnidad, oa, nivel, id ) );

        }else{

            console.log( idUnidad, oa, nivel );

            dispatch( oaStartAddNew( idUnidad, oa, nivel ) );
            
        }

          setVisible({open:false});
    }

    const onDelete = (id) => {
        dispatch( oaStartDelete( id ) )
        setVisible({open:false});
    }

    const editar = (oa)=>{
        setEdit({
          bool:true
        });
        setForm({
        
            idUnidad:oa.idUnidad,
            oa:oa.oa,
            nivel:oa.nivel,
            estado:oa.status,
            id:oa._id

        });
        
        onEdit();
      }

    const data = oas.map(
        ( oa , index ) => ({
            key: oa._id,
            oa: oa.oa,
            nivel: oa.nivel,
            estado: oa.status ? <div className="true">Activo</div>:<div className="false">Inactivo</div>,
            accion: [<FormOutlined key={oa._id} onClick={()=>editar(oa)} className="mr"  style={{color : "#1ED760"}} />,<DeleteOutlined key={ index } onClick={()=>onDelete(oa._id)}  style={{color : "#FF0000"}} />,]
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
    }
}
