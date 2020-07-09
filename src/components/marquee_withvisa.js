import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import MarqueeA from './marqueeAUp';
import MarqueeB from './marqueeBDown';

export default function Marquee_withvisa() {
    return (
        <div style={{
            display: "inline",
            willChange: 'transform'
        }}>
            <MarqueeB width="160px" name='W' time='1' />
            <MarqueeA width="62px" name='I' time='2' />
            <MarqueeB width="100px" name='T' time='1' />
            <MarqueeA width="120px" name='H' time='5' />
            <MarqueeB width="30px" name=' ' time='1' />
            <MarqueeA width="110px" name='V' time='2' />
            <MarqueeB width="62px" name='I' time='1' />
            <MarqueeA width="108px" name='S' time='5' />
            <MarqueeB width="110px" name='A' time='1' />
            <MarqueeA width="30px" name=' ' time='20' />
        </div>
    )
}