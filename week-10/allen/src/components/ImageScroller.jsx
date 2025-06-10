import React from 'react'
import { useState } from 'react'

import './ImageScroller.css'
import { useEffect } from 'react'

const Images = [
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749111538/ny5dbzybmujirecsfgas.png?_upload_ref=ic_img_tool&__ar__=4.03",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747915776/f6zlpygi4yy0pfh1v5gh.png?_upload_ref=ic_img_tool&__ar__=4.03",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1748271928/dzbmm4camyzhyryswhj6.png?_upload_ref=ic_img_tool&__ar__=4.03",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747735158/vegafglbrlqpyitn0lx2.png?_upload_ref=ic_img_tool&__ar__=4.03"
  ]

export const ImageScroller = () => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(prev => (prev === Images.length - 1)? 0 : prev+1)
        }, 3000)

        return () => clearInterval(interval);
    }, []);


    return <div className='carosel'>
        <h2>What's Trending</h2>
        {Images.map((items, idx) => {
            return <img width="1032px" src={items} alt="" key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'}/>
        })}
        <span className='indicators'>
            {Images.map((_, idx) => {
                return <button key={idx} onClick={() => {setSlide(idx)}} className={slide === idx? 'indicator' : 'indicator indicator-inactive'}></button>
            })}
        </span>
    </div>
}