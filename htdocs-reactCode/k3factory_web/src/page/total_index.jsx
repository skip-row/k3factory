import React from 'react'

export default function Total_index() {
    return (
    <div className="contentWrap">
        <nav aria-label="주요 메뉴"></nav>

        <main id="main">
            <section id="visual">
            <h1></h1>
            <img src="missing.png" alt="" />
            <video preload="none" controls>
                <source src="missing.webm" type="video/webm" />
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

            <section id="community">
            <h2>커뮤니티</h2>
            <img src="missing.png" alt="" />
            </section>
        </main>
    </div>
  )
}