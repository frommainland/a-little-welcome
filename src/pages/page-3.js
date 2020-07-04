import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Clock from '../components/clock'
import ClockMini from '../components/clock-mini'


import loadable from '@loadable/component'
const Worldmap = loadable(() => import('../components/map'))


const Page3 = () => (
    <Layout>
        <Worldmap />
        <div style={{
            width: 1180,
            position: 'absolute',
            top: "50%",
            left: '50%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Clock />
            <div style={{
                width: 680,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                justifyItems: 'center',
                gap: "60px",
                textAlign: "center",
            }}>
                <ClockMini name="london" nameCH="伦敦" />
                <ClockMini name="singapore" nameCH="新加坡" />
                <ClockMini name="dubai" nameCH="迪拜" />
                <ClockMini name="san francisco" nameCH="旧金山" />
                <ClockMini name="miami" nameCH="迈阿密" />
                <div style={{
                    zIndex: 2,
                    color: '#F5F3F0',
                    textAlign: 'center',
                }}>
                    <img
                        src={require('../images/5-8.svg')} width='172'
                        style={{
                            marginBottom: 27
                        }} />
                    <h1 style={{
                        fontSize: "16px",
                        letterSpacing: "0.37px",
                        lineHeight: "33px",
                    }}>创新中心 / 创新工作室</h1>
                    <h3 style={{
                        fontFamily: "futura",
                        fontSize: 14,
                        letterSpacing: "0.28px",
                        textTransform: "capitalize"
                    }}>Centers / Studios</h3>
                </div>
            </div>
        </div>
        <ul style={{
            fontSize: 12,
            textAlign: 'center',
            color: '#E9E0D8',
            fontWeight: 900,
            listStyleType: 'none'
        }}
        >
            <li style={{
                position: 'absolute',
                left: 36,
                top: 36
            }}>与Visa公共创新</li>
            <li style={{
                position: 'absolute',
                right: 36,
                top: 36
            }} > Global network of Innovation Centers</li>
            <li style={{
                position: 'absolute',
                left: 36,
                bottom: 36
            }}> INNOVATE WITH VISA</li>
            <li style={{
                position: 'absolute',
                right: 36,
                bottom: 36
            }}>Visa 创新中心全球网络 </li>
        </ul>

    </Layout >
)

export default Page3