import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';

const ViewBasedAnimation = () => {

    const ref = useRef(null);

    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        console.log("Is in View-> ", isInView)
    }, [isInView])

    return (
        <>
            <div style={{ height: "150vh"}}></div>
            <motion.div
                style={{height: '100vh', background: 'black'}}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1 }}
            />
            <div
            ref={ref}
            style={{
                height: '100vh',
                background: isInView ? 'blue' : 'red',
                transition: '1s background'
            }}
            />
        </>
    )
}

export default ViewBasedAnimation;