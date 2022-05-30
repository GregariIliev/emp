import './Footer.css';

export function Footer(){
    return (
        <footer className='footer'> <small>&copy; Copyright {new Date().getFullYear()}, Example Corporation</small> </footer>
    )
}