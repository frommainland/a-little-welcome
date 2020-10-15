import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import P5 from '../components/p5'
import Timer from "../components/timer"
import style from "../components/index.module.css"

import loadable from "@loadable/component"
const P5 = loadable(() => import("../components/p5"))

const IndexPage = () => (
    <Layout>
        <div className={style.wrap}>
            <ul className={style.list}>
                <Link to="/page-1">
                    <li>
                        <sup>壹</sup>跑马灯和网格
                    </li>
                </Link>
                <Link to="/page-2">
                    <li>
                        <sup>贰</sup>律动竖线
                    </li>
                </Link>
                <Link to="/page-3">
                    <li>
                        <sup>叁</sup>中心时钟
                    </li>
                </Link>
                <Link to="/page-4">
                    <li>
                        <sup>肆</sup>线段排列
                    </li>
                </Link>
                <Link to="/page-5">
                    <li>
                        <sup>伍</sup>元素
                    </li>
                </Link>
                <Link to="/page-6">
                    <li>
                        <sup>陆</sup>移动销售终端
                    </li>
                </Link>
                <Link to="/page-7">
                    <li>
                        <sup>柒</sup>生物识别
                    </li>
                </Link>
                <Link to="/page-8">
                    <li>
                        <sup>捌</sup>物联网
                    </li>
                </Link>
                <Link to="/page-9">
                    <li>
                        <sup>玖</sup>数字支付
                    </li>
                </Link>
            </ul>
        </div>
        <P5 />
    </Layout>
)

export default IndexPage
