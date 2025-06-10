

const testimonial = [
    {
        id: "1",
        mesg: "I chose ALLEN Online Courses because I wanted to balance my NEET prep with my school schedule. The course structure, from daily homework to post-class handouts, was well-organized.",
        src: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Sarth-128x128_wrp1pw.webp", 
        name: "SARTH PATIL", 
        rank: "NEET-UG 2024, Score 710/720"
    },
    {
        id: "2",
        mesg: "I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score.",
        src: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Galib-128x128_1_ktw4sw.webp", 
        name: "SEKH GALIB RAZA", 
        rank: "NEET-UG 2024, Score 690/720"
    },
    {
        id: "3",
        mesg: "I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!",
        src: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Avik-128x128_vbkt1r.webp", 
        name: "AVIK DAS", 
        rank: "JEE Adv. 2024, AIR 69"
    },
    {
        id: "4",
        mesg: "I came to know about ALLEN’s Online Test Series from my senior in school. The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. They gave me the real feel of the competition.",
        src: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Shifa-128x128_yjuigd.webp", 
        name: "SHIFA FATIMA", 
        rank: "NEET-UG 2024, Score 696/720"
    },
]

import './Section5.css'
import {Testimonial} from './UI/Testimonial'


export const Section5 = () => {

    return (
        <div className="cont">
            <div><h2 className='header'>Testimonials from our students</h2></div>
            <div className='card-container'>
                {testimonial.map((curMesg) => {
                    return <Testimonial 
                    key={curMesg.id}
                    data = {curMesg}
                    />
                })}
            </div>
        </div>
    )
}