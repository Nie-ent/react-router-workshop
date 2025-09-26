import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
    return (

        <nav>
            <ul className="flex justify-center gap-10">
                <li className=""><NavLink to='/'>Home</NavLink></li>
                <li className=""><NavLink to='about'>About</NavLink></li>
                <li className=""><NavLink to='product'>Products</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar