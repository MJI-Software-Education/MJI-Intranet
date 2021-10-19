import { useState } from 'react'

export const useEdit = ({setForm,initialState}) => {
    const [edit, setEdit] = useState({
        bool:false
    });
    const [visible, setVisible] = useState({
        open:false
    });
      const onClick = () => {
          setVisible({open:true});
          setEdit({
              bool:false
            });
            setForm(initialState);
    }
    const onEdit = () => {
        setVisible({open:true});
        setEdit({
            bool:true
        })
    }
    const close = () => {
        setVisible({open:false});
    }

    return {
        edit,
        setEdit,
        visible,
        setVisible,
        onClick,
        onEdit,
        close
    };
}
