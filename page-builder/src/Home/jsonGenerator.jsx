import react from 'react';
import ReactJson from 'react-json-view';
import { useSelector } from "react-redux";

function JsonGenerator(){
    let state = useSelector(state => state.build.pageBuilder[0])
    return (
        <section className='generator-builder position-relative'>
            <div className='container'>
                <div className='row mh-100'>
                    <ReactJson 
                        theme='colors' 
                        src={state} 
                        style={{
                            padding:"16px"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default JsonGenerator;