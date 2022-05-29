import './Header.css';

export function Header(){
    return (
        <header className='header'>
            <nav className='navbar'>
                <a href='/home'>Home</a>
                <a href='/dashboard'>Dashboard</a>
            </nav>
        </header>
    )
}