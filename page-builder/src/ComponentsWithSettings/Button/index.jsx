import react,{ useState } from 'react';
import { useDispatch } from "react-redux";
import { addSetting } from "../../Redux/Actions/BuildActions"

function ButtonLayer({id}){
    const dispatch = useDispatch()
    const [container, setContainer] = useState('container');

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            component:'section',
            id,
            containerType:container
        }
        dispatch(addSetting(obj))
    }
    return (
        <div className='layer-resolver-element'>
            Button Setting
        </div>
    )
}

export default ButtonLayer;