import react,{ useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import LayersResolver from "../Resolver/LayersResolver";


function ComponentWithSettings(){
    const layersData = useSelector(state => state);
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor)
    const [layers, setLayers] = useState(layersData.build.pageBuilder);

    useEffect(() => {
        setLayers(layersData.build.pageBuilder);
    }, [layersData]);

    if (layers && layers.length > 0) {
        return (
            <div className='component-with-settings'>
                <div className='container'>
                    <div className='component-with-settings-header'>Layers</div>
                    <div className='component-with-settings-layers my-4'
                     style={{borderLeft:`1px dashed ${randomColor}`, borderBottom:`1px dashed ${randomColor}`}}>
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