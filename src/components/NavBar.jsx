import React from 'react'
import { navLinks } from '../constansts'
const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
            {/* came these navbar links from constant/index.js */}
            {navLinks.map(( {label} )=> (
                <li key={label}>
                    <a href={label}>{label}</a>
                </li>
            ))}
        </ul>

            {/* search and cart */}
            <div className='flex-center gap-3'>
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                 <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>

            </div>
      </nav>
    </header>
  )
}

export default NavBar
