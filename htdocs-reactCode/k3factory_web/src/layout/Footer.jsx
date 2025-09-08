import Styles from './../styles/Footer.module.css'


export default function Footer() {
  return (
    <footer>
      <div className={Styles.inner}>
      
        <div className={Styles.topArea}>
          <ul>
            <li><a href="">푸터메뉴1</a></li>
            <li><a href="">푸터메뉴2</a></li>
            <li><a href="">푸터메뉴3</a></li>
            <li><a href="">푸터메뉴4</a></li>
            <li><a href="">푸터메뉴5</a></li>
          </ul>
        </div>

        <div className={Styles.bottomArea}>
           <p>본 사이트는 개인 프로젝트용으로 제작되었으며, 실제 기업이나 단체와 무관합니다.</p>
           <p>E-mail: contact@k3factory.dev</p>
           <p className={Styles.footItem}>ⓒ 2025 K3Factory. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  )
}
