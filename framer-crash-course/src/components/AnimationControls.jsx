import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const AnimationControl = () => {

    const controls = useAnimationControls();

    const handleClick = () => {
        // Do something
        controls.start("flip");
    }

    return (
        <div
        style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem"
        }}
        >
            
            <button 
            onClick={handleClick}
            className='example-button'>Flip it!</button>
            <motion.div
            style={{
                width: "150px",
                height: "150px", 
                backgroundColor: "black",
            }}
            variants={{
                initial: {
                    rotate: '0deg',
                },
                flip: {
                    rotate: '360deg'
                }
            }}

            initial="initial"
            animate={controls}
            ></motion.div>
        </div>
    )
}

export default AnimationControl;