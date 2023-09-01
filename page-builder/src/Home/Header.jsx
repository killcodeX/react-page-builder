import react from 'react';

function Header(){
    return (
        <header className='header'>
            <div className='header-left-side'>Page Builder</div>
            <div className='right-left-side'>
                <button type="button" class="btn btn-dark">Preview</button>
            </div>
        </header>
    )
}

export default Header;