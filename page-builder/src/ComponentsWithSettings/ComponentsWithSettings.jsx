import react,{ useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import LayersResolver from "../Resolver/LayersResolver";
import { randomColor } from "../Utils/RandomColor";


function ComponentWithSettings(){
    const layersData = useSelector(state => state);
    const [border, setBroder] = useState('#000000')
    const [layers, setLayers] = useState(layersData.build.pageBuilder);

    useEffect(() => {
        setLayers(layersData.build.pageBuilder);
        setBroder(randomColor())
    }, [layersData]);

    if (layers && layers.length > 0) {
        return (
            <div className='component-with-settings'>
                <div className='container'>
                    <div className='component-with-settings-header'>Layers</div>
                    <div className='component-with-settings-layers my-4'
                     //style={{borderLeft:`1px dashed ${border}`, borderBottom:`1px dashed ${border}`}}>
                     >
                        {
                            layers.map(item =>{
                                return <LayersResolver key={item.id} layer={item}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
      } else {
        return (
            <div className='component-with-settings'>
                <div className='container'>
                    <div className='component-with-settings-header'>Layers</div>
                    <div className='component-with-settings-layers'>
                        Component Not Found
                    </div>
                </div>
            </div>
        )
      }
}

export default ComponentWithSettings;