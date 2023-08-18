
import HeaderPage from '../partials/headerPage'
import style from './css/HomeLayout.module.css'
import { Outlet } from 'react-router-dom'
const HomeLayout = () => {
  return (
    <div className={style['home-main']}>
        < HeaderPage />
        <Outlet />

    </div>
  )
}

export default HomeLayout