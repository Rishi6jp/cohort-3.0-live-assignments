import { useState } from 'react'
import './Section6.css'
import {ChevronDown, ChevronUp} from 'lucide-react'

export const Section6 = () => {
    const [isOpen, setIsOpen] = useState(false);


    

    return (
        <div className="form-container">
            <div >
                <img width="310.781px" height="316.594" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1730878962/oqfy1klihlgn0vmpy77w.webp?_upload_ref=ic_img_tool" alt="" />
            </div>
            <div className='form-main'>
                <h3>Request a callback</h3>
                <hr style={{border: "none", borderTop: "1px solid white"}}/>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", placeContent: "center", marginTop: "1rem"}}>
                    <div>
                        <div><span htmlFor="" className='col-text'>Student’s full name</span><span className='col-red'>*</span></div>
                        <input  className='inp-pad' type="text" placeholder='Ex: Rohit Singh'/>
                    </div>
                    <div>
                        <div><span htmlFor="" className='col-text'>Mobile Number</span><span className='col-red'>*</span></div>
                        <input  className='inp-pad' type="text" placeholder='Ex: +91 9876543210'/>
                    </div>
                    <div>
                        <div><span htmlFor="" className='col-text'>Class</span><span className='col-red'>*</span></div>
                        <input className='inp-pad' type="text"/>
                        <div onClick={() => {setIsOpen(!isOpen);console.log(isOpen);}} style={{position: "relative", top: '-58%', left: '5%'}}>
                            <div style={{position: "absolute"}}>6th</div>
                            <div style={{position: "absolute", right: "10%", top: "10%"}}><ChevronDown/></div>
                            
                        </div>
                    </div>
                    <div>
                        <div><span htmlFor="" className='col-text'>Goals</span><span className='col-red'>*</span></div>
                        <input className='inp-pad' type="text" />
                        <div onClick={() => {setIsOpen(!isOpen);console.log(isOpen);}} style={{position: "relative", top: '-58%', left: '5%'}}>
                            <div style={{position: "absolute"}}>NEET</div>
                            <div style={{position: "absolute", right: "10%", top: "10%"}}><ChevronDown/></div>
                            
                        </div>
                    </div>
                    <div>
                        <div><span htmlFor="" className='col-text'>Preferred Courses</span><span className='col-red'>*</span></div>
                        <input className='inp-pad' type="text" />
                        <div onClick={() => {setIsOpen(!isOpen);console.log(isOpen);}} style={{position: "relative", top: '-58%', left: '5%'}}>
                            <div style={{position: "absolute"}}>Online Courses</div>
                            <div style={{position: "absolute", right: "10%", top: "10%"}}><ChevronDown/></div>
                            
                        </div>
                    </div>
                    <div>
                        <div><span htmlFor="" className='col-text'>State</span><span className='col-red'>*</span></div>
                        <input className='inp-pad' type="text" />
                        <div onClick={() => {setIsOpen(!isOpen);console.log(isOpen);}} style={{position: "relative", top: '-58%', left: '5%'}}>
                            <div style={{position: "absolute"}}>Andaman and Nicobar islands</div>
                            <div style={{position: "absolute", right: "10%", top: "10%"}}><ChevronDown/></div>
                            
                        </div>
                    </div>
                </div> 
                <div style={{display: "flex", placeContent: "center", gap: "5px"}}>
                    <div>By continuing, you agree to our </div>
                    <div style={{textDecoration: "underline"}}>Terms & Conditions</div>
                </div>
                <div style={{placeContent: "center", display: "flex", alignContent: "center"}}>
                    <button className='explore-btn' style={{padding: "15px 100px", marginTop: "1rem"}}>Submit</button>
                </div>
            </div>
        </div>
    )

}