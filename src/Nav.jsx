import {} from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'

function Nav(){
    return(
        <nav className='nav'>
        <NavLink to ="Home" className="nav-link">Home</NavLink>
        <NavLink to ="Produtos" className="nav-link">Produtos</NavLink>
        <NavLink to ="Sobre" className="nav-link">Sobre</NavLink>
        </nav>
    )
}

export default Nav