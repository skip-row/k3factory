import React from 'react'
import Styles from 'styles/Main.module.css'

export default function Main() {
    return (
    <div className={Styles.wrap}>
        <nav aria-label="주요 메뉴"></nav>

        <main id="main">
            오늘 운동 완료
        </main>
    </div>
  )
}