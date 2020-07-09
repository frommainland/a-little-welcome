import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import MarqueeA from './marqueeAUp';
import MarqueeB from './marqueeBDown';

export default function Marquee_innovate() {
    return (
        <div style={{
            display: "inline",
            willChange: 'transform'
        }}>
            <MarqueeA width="62px" name='I' time='5' />
            <MarqueeB width="122px" name='N' time='1' />
            <MarqueeA width="122px" name='N' time='5' />
            <MarqueeB width="115px" name='O' time='1' />
            <MarqueeA width="122px" name='V' time='5' />
            <MarqueeB width="115px" name='A' time='1' />
            <MarqueeA width="100px" name='T' time='5' />
            <MarqueeB width="100px" name='E' time='1' />
            <MarqueeA width="30px" name=' ' time='5' />
        </div>
    )
}