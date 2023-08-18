import React from 'react'
import style from "./css/HeaderPage.module.css"

import {Link } from 'react-router-dom'

const HeaderPage = () => {
  return (
    <div className={style['nav-container']}>
       <div className="logo-container">
          <h4 className='m-0 ps-2 text-white'>logo</h4>
       </div>
       <ul className=" m-0 ">
        <Link to="/" className={style['link']} >Home</Link>
        <Link to="/cars" className={style['link']}>Cars</Link>
        <Link to="/about"  className={style['link']}>About</Link>
       </ul>
       <div>
          <Link to="/about"  className="pe-2 text-decoration-none text-white">Logout</Link>
          <Link to="/cars"  className="pe-2 text-decoration-none text-white">SignUp</Link>
       </div>
     

    </div>
  )
}

export default HeaderPage