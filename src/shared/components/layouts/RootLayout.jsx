import FooterPage from "../partials/footerPage"
import HeaderPage from "../partials/headerPage"
import style from './css/Rootlayout.module.css'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    < div className={style['root-main']}>
        < HeaderPage />
           <Outlet />
        < FooterPage />
    </div>
  )
}

export default RootLayout