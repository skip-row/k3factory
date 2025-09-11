import React from 'react'
import Styles from 'styles/Main.module.css'

export default function Main() {
    return (
    <div className={Styles.wrap}>
        <nav aria-label="주요 메뉴"></nav>

        <main id="main">
            플러그인 마스터
        </main>
    </div>
  )
}