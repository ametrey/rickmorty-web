import rmlogo from '../images/rickmortylogobl.png';
import '../styles/Header.css';

const Header = () => {

    return (
        
        <header id="header">
            <div id="logo"> <img src={rmlogo} alt="Rick And Morty logo" /></div>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li><a className="nav-link" href="#characters"> Characters</a></li>
                    <li><a className="nav-link" href="#locations">Locations</a></li>
                    <li><a className="nav-link" href="#episodes">Episodes</a></li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }