import Styles from 'styles/Header.module.css'
import K3logo from 'assets/K3logo_w.png'

import TopMenu from 'data/TotalMenuList.json'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header>
      <div className={Styles.inner}>
        <div className={Styles.logo}><img src={K3logo} alt="로고" /></div>
        <div className={Styles.gnb}>
          <ul>
            {
              TopMenu.map((item,idx)=> <li key={idx}><Link to={item.menuLink}>{item.menuName}</Link></li>)
            }
          </ul>
        </div>

      </div>
      
    </header>
  )
}
