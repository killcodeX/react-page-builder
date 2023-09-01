import react from 'react';
import ComponentList from '../Components/ComponentList';

function PageBuilder(){
    return (
        <section className='page-builder'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 p-0 border-right'>
                        <ComponentList/>
                    </div>
                    <div className='col-9 bg-light'>
                    <div className='component-setting-header'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageBuilder;