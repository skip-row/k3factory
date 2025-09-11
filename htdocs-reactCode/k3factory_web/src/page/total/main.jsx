import React from 'react'
import MainVusual from 'assets/MainVisual1.mp4'
import Styles from 'styles/Main.module.css'

export default function Main() {
    return (
    <div className={Styles.wrap}>
        <nav aria-label="주요 메뉴"></nav>

        <main id="main">
            <section id="visual">
            
            <video preload="none" controls autoplay="autoplay" muted="muted" loop="loop" playsinline="" className="videoLoaded">
                <source src={MainVusual} type="video/mp4" />
                <p>동영상이 지원되지 않는 브라우저입니다.</p>
            </video>

            </section>

            <section id="notice">
            <h2>Notice List</h2>
            <article className="notice">
                <img src="missing.png" alt="" />
                <h3></h3>
                <p></p>
            </article>
            <article className="notice">
                <img src="missing.png" alt="" />
                <h3></h3>
                <p></p>
            </article>
            <article className="notice">
                <img src="missing.png" alt="" />
                <h3></h3>
                <p></p>
            </article>
            </section>
        </main>
    </div>
  )
}