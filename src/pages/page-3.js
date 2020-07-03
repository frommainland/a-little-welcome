import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Clock from '../components/clock'
// import Worldmap from '../components/map'


import loadable from '@loadable/component'
const Worldmap = loadable(() => import('../components/map'))


const Page3 = () => (
    <Layout>
        <Worldmap />
        <Clock />
    </Layout>
)

export default Page3