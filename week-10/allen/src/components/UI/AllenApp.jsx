import {ChevronDown, ChevronUp} from 'lucide-react'

import "../Section4.css"

export const AllenApp = ({data, isActive, onToggle}) => {
    const {title, description} = data

    return (
        <div>
            <div >
                <div className="title">
                   <h3>{title}</h3>
                <button onClick={onToggle}>{isActive ? <ChevronUp/> : <ChevronDown/>}</button> 
                </div>
                
                <p>{isActive && description}</p>
            </div>
            <hr style={{marginTop: "24px", border: "none", borderTop: "1px solid #ccc"}}/>
        </div>
    )
    
}