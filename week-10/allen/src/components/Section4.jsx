import React from 'react'
import { useState } from 'react'

import './Section4.css'
import { AllenApp } from './UI/AllenApp'


const advantageData = [
    {
        id: 1,
        title: "400 Lakh+ Questions Practised",
        description: "Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas",
        src: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330769/vtga4hno9tvp668jm34i.svg?_upload_ref=ic_img_tool"
    },
    {
        id: 2,
        title: "10 Lakh+ hours of Learning Content consumed",
        description: "Watch live or recorded lectures from ALLEN's top faculty, covering every topic and difficulty level.",
        src: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330884/lls3agf6fwmht6zba5vx.svg?_upload_ref=ic_img_tool"
    },
    {
        id: 3,
        title: "10 Lakh+ Doubts Solved",
        description: "Get instant answers with faculty help & our AI Assistant available 24/7 in any language.",
        src: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330851/jncudghayyflxuxoodkg.svg?_upload_ref=ic_img_tool"
    }
]



export const Section4 = () => {
    const [activeId, setActiveId] = useState(1)

    const handleButton = (id) => {
        setActiveId((prevId) => (prevId === id) ? false : id);
    }


    return (
        <div className='container'>
            <div className='heading'><h2>ALLEN App Advantage</h2></div>
            <div className='content'>
                <div className='content-text'>
                    {advantageData.map((curAdv) => {
                        return <AllenApp 
                        key = {curAdv.id}
                        data = {curAdv}
                        isActive={ activeId === curAdv.id}
                        onToggle={() => handleButton(curAdv.id)}
                        />
                    })}
                </div>
                <div className='content-img'>
                    {advantageData.map((curSrc) => {
                        return <img width="500px" src={(activeId === curSrc.id) ? curSrc.src : ""} alt="" />
                    })}
                </div>
            </div>
            <div><button className='explore-btn'>Explore More</button></div>
        </div>
    )
   
};
    