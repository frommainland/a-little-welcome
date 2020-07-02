import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import P5 from '../components/p5'
import Timer from '../components/timer'
import style from '../components/index.module.css'


const IndexPage = () => (
  <Layout>
    <div className={style.wrap}>
      <ul className={style.list}>
        <Link to="/page-1/"><li><sup>壹</sup>跑马灯和网格</li></Link>
        <Link to="/page-2/"><li><sup>贰</sup>律动竖线</li></Link>
        <Link to='page-3'><li><sup>叁</sup>中心时钟</li></Link>
        <li><sup>肆</sup>线段排列</li>
        <li><sup>伍</sup>自动生成</li>
        <li><sup>陆</sup>选个标题</li>
      </ul>

    </div>
    <P5 />

  </Layout >
)

export default IndexPage
