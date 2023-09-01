import react from 'react';
import ComponentList from '../Components/ComponentList';
import ComponentsWithSettings from "../ComponentsWithSettings/ComponentsWithSettings";

function PageBuilder(){
    return (
        <section className='page-builder position-relative'>
            <div className='container-fluid'>
                <div className='row mh-100'>
                    <div className='col-3 p-0'>
                        <ComponentList/>
                    </div>
                    <div className='col-9 bg-light'>
                        <ComponentsWithSettings/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageBuilder;