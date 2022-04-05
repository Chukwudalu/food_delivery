import React from 'react'
import {} from "@mui/material"
import { SearchRounded, ShoppingCartRounded, BarChart } from '@mui/icons-material'

function Header() {
  return (
    <header>
      <img src="" alt=""/>
      <div className="inputBox">
        <SearchRounded className='searchIcon'/>
        <input type="text" placeholder="Search"/>
      </div> 
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart"/>
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>  
      <div className="profileContainer">
        <div className="imgBox">
          <img src="" alt=""/>
        </div>
        <h2 className="username">Jeremiah Okwuolisa</h2>
      </div> 
      <div className="toggleMenu">
        <BarChart className="toggleIcon"/>
      </div>
    </header>
  )
}

export default Header