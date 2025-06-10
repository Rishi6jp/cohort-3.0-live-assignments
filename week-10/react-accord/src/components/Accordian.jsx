import { useEffect } from "react";
import faq from "../API/faq.json"
import { useState } from "react";
import { FAQ } from "./UI/FAQ";

export const Accordian = () => {
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false)



    useEffect(() =>  {
        setData(faq)
    }, [])


    const handleButton = (id) => {
        setActiveId((prevId) => (prevId === id) ? false : id)
    }

    return (
    <>
        <h1>The Accordian</h1>
        <ul className="section-accordion">
            {data.map((curElem) => {
                return <FAQ 
                key={curElem.id} 
                curData={curElem} 
                isActive={activeId === curElem.id} 
                onToggle={() => handleButton(curElem.id)} />
            })}
        </ul>
    </>
    )
}