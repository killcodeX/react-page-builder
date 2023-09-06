import react from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    const savePage = () =>{
        console.log('savePage')
    }
    const moveToPreview = () =>{
        navigate('/preview');
    }
    const backToPage = () =>{
        navigate('/');
    }
    const moveToGenerate = () =>{
        console.log('moveToGenerate')
        navigate('/json-generator');
    }
    if(window.location.pathname == '/'){
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    <button type="button" className="btn btn-outline-dark mx-2" onClick={savePage}>Save</button>
                    <button type="button" className="btn btn-dark" onClick={moveToPreview}>Preview</button>
                </div>
            </header>
        )
    }else if(window.location.pathname == '/preview'){
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    <button type="button" className="btn btn-outline-dark mx-2" onClick={backToPage}>Page Builder</button>
                    <button type="button" className="btn btn-dark" onClick={moveToGenerate}>Generate</button>
                </div>
            </header>
        )
    }else{
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    <button type="button" className="btn btn-outline-dark mx-2" onClick={backToPage}>Page Builder</button>
                </div>
            </header>
        )
    }
}

export default Header;