import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Timer from "../components/timer"
import style from "../components/index.module.css"

import loadable from "@loadable/component"
const P5 = loadable(() => import("../components/p5"))

const IndexPage = () => (
    <Layout>
        <div className={style.wrap}>
            <ul className={style.list}>
<<<<<<< HEAD
                <Link to="/page-11">
                    <li>
                        <sup>11.</sup>心驰所向
                    </li>
                </Link>
                <Link to="/page-10">
                    <li>
                        <sup>10.</sup>银行标识代码
                    </li>
                </Link>
                <Link to="/page-9">
                    <li>
                        <sup>9.</sup>数字支付
                    </li>
                </Link>
                <Link to="/page-8">
                    <li>
                        <sup>8.</sup>物联网
                    </li>
                </Link>
                <Link to="/page-7">
                    <li>
                        <sup>7.</sup>生物识别
=======
                <Link to="/page-1">
                    <li>
                        <sup>1.</sup>跑马灯和网格
                    </li>
                </Link>
                <Link to="/page-2">
                    <li>
                        <sup>2.</sup>律动竖线
                    </li>
                </Link>
                <Link to="/page-3">
                    <li>
                        <sup>3.</sup>中心时钟
                    </li>
                </Link>
                <Link to="/page-4">
                    <li>
                        <sup>4.</sup>线段排列
                    </li>
                </Link>
                <Link to="/page-5">
                    <li>
                        <sup>5.</sup>元素
>>>>>>> 4a0b4f1ba364f52dae76b4197933a7f12d66aefa
                    </li>
                </Link>
                <Link to="/page-6">
                    <li>
                        <sup>6.</sup>移动销售终端
                    </li>
                </Link>
<<<<<<< HEAD
                <Link to="/page-5">
                    <li>
                        <sup>5.</sup>元素
                    </li>
                </Link>
                <Link to="/page-4">
                    <li>
                        <sup>4.</sup>线段排列
                    </li>
                </Link>
                <Link to="/page-3">
                    <li>
                        <sup>3.</sup>中心时钟
                    </li>
                </Link>
                <Link to="/page-2">
                    <li>
                        <sup>2.</sup>律动竖线
                    </li>
                </Link>
                <Link to="/page-1">
                    <li>
                        <sup>1.</sup>跑马灯和网格
=======
                <Link to="/page-7">
                    <li>
                        <sup>7.</sup>生物识别
                    </li>
                </Link>
                <Link to="/page-8">
                    <li>
                        <sup>8.</sup>物联网
                    </li>
                </Link>
                <Link to="/page-9">
                    <li>
                        <sup>9.</sup>数字支付
                    </li>
                </Link>
                <Link to="/page-10">
                    <li>
                        <sup>10.</sup>银行标识代码
                    </li>
                </Link>
                <Link to="/page-11">
                    <li>
                        <sup>11.</sup>心驰所向
>>>>>>> 4a0b4f1ba364f52dae76b4197933a7f12d66aefa
                    </li>
                </Link>
            </ul>
        </div>
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            zIndex: -1,
        }}>
            <P5 />
        </div>

    </Layout>
)

export default IndexPage
