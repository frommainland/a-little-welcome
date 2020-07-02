import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Timer from '../components/timer'
import PillP3 from '../components/pill-p3'
import Layout from "../components/layout"
import styles from '../components/page-3.module.scss'


const page2 = () => (
    <Layout>
        <div style={{ backgroundColor: 'black', width: '100%', height: '100%', position: 'fixed' }}>
            <div className={styles.left}>
                <div className={styles.textWrap}>
                    <Link to='/'>
                        <div className={styles.home}>
                            <img src={require('../images/page3-arrow.svg')} />
                        </div>
                    </Link>
                    <h1>
                        欢迎<br />
                    各位同事<br />
                    莅临参观
                </h1>
                    <h4>☻ Visa中国创新中心 ☻</h4>
                    <h4><Timer /></h4>
                </div>
            </div>
            <div className={styles.right}>
                {/* 1 */}
                <div style={{
                    background: "var(--black)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 2 */}
                <div style={{
                    background: "var(--green)",
                    gridColumn: "2 / span 2"
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 上面有个span 2，所以下面的编号3是第三个竖条，!但是第四条线 */}
                {/* 3 */}
                <div style={{
                    background: "var(--yellow)",
                }}>
                    <PillP3 />
                </div>
                {/* 5 */}
                <div style={{
                    background: "var(--green)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 5 */}
                <div style={{
                    background: "var(--black)",
                    transform: 'rotate(180deg)'
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 6 */}
                <div style={{
                    background: "var(--red)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 7 */}
                <div style={{
                    background: "var(--black)",
                    transform: 'rotate(180deg)'
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 8 */}
                <div style={{
                    background: "var(--red)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 9 */}
                <div style={{
                    background: "var(--grey)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 10 */}
                <div style={{
                    background: "var(--blue)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 11 */}
                <div style={{
                    background: "var(--black)",
                    gridColumn: "12/span 2",
                    transform: 'rotate(180deg)'
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 12 */}
                <div style={{
                    background: "var(--yellow)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 13 */}
                <div style={{
                    background: "var(--green)",
                    transform: 'rotate(180deg)'
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 14 */}
                <div style={{
                    background: "var(--black)",
                    transform: 'rotate(180deg)'
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 15 */}
                <div style={{
                    background: "var(--red)",
                }}>
                    <PillP3 />
                </div>
                {/* 16 */}
                <div style={{
                    background: "var(--black)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 17 */}
                <div style={{
                    background: "var(--green)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
                {/* 18 */}
                <div style={{
                    background: "var(--grey)",
                }}>
                    <PillP3 />
                    <PillP3 />
                </div>
            </div>
        </div>
    </Layout >
)

export default page2