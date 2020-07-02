import React, { useState, useEffect } from 'react';

export default function Timer() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000)
    }, [date])

    function tick() {
        setDate(new Date())
    }


    return (
        <div style={{
        }}>
            {date.toLocaleTimeString('zh-CN')}
        </div>
    )
}