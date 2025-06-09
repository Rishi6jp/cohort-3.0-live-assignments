import { useState } from 'react'
import './App.css'

import {ArrowBigLeft, ArrowBigRight} from "lucide-react"

import { ImageScroller } from './components/ImageScroller'
import { Section4 } from './components/Section4'
import { Section5 } from './components/Section5'
import { Section6 } from './components/Section6'
import { Section7 } from './components/Section7'

function App() {

  return (
    <>
      <Navbar/>
      <PromoBanner/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </>
  )
}

function Navbar() {
  return <div style={{padding:"15px", display: "flex", justifyContent:"space-between", alignContent: "center"}}>
    <div style={{display: "flex", alignItems: "center", color: "#2a2a2e",  fontSize: "15px"}}>
      <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7"><path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path></svg>
      <div style={{marginLeft: "28px"}}>Courses</div>
      <div style={{marginLeft: "28px"}}>Test Series</div>
      <div style={{marginLeft: "28px"}}>Results</div>
      <div style={{marginLeft: "28px"}}>Study Materials</div>
      <div style={{marginLeft: "28px"}}>Scholarships</div>
      <div style={{marginLeft: "28px"}}>Books</div>
      <div style={{marginLeft: "28px"}}>More</div>
    </div>
    <div style={{display: "flex"}}>
      <span style={{borderRadius: "50%", backgroundColor: "#0266da", padding: "10px", textAlign: "center" , marginRight: "20px", display: "flex", width: "18px", height: "18px"}}>
        <svg style={{filter: "invert(1)", textAlign: "center"}} fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.2432 11.3726C14.1731 11.2026 14.0528 11.0625 13.8725 10.9425L11.6587 9.37209C11.4884 9.26207 11.3381 9.17204 11.1878 9.11203C11.0376 9.05201 10.9073 9.02201 10.7771 9.02201C10.6068 9.02201 10.4565 9.07202 10.3063 9.16204C10.156 9.24206 9.99574 9.37209 9.82544 9.53213L9.31455 10.0323C9.24443 10.1023 9.15427 10.1423 9.04408 10.1423C8.98397 10.1423 8.93388 10.1423 8.87378 10.1123C8.82369 10.0923 8.78362 10.0723 8.75357 10.0623C8.65339 10.0123 8.52317 9.92223 8.40295 9.83221C7.87203 9.43211 6.90033 8.50188 6.53969 8.15179C6.30929 7.90173 6.06887 7.65166 5.8585 7.4116C5.56799 7.06152 5.35763 6.78145 5.23742 6.56139C5.2274 6.52138 5.20736 6.48137 5.18733 6.43136C5.17731 6.38135 5.16729 6.33133 5.16729 6.28132C5.16729 6.17129 5.19735 6.09127 5.27749 6.01125L5.78838 5.48112C5.94866 5.32108 6.07889 5.16104 6.15903 5.011C6.24919 4.86097 6.29927 4.70093 6.29927 4.54089C6.29927 4.41085 6.26922 4.27082 6.20912 4.13078C6.14901 3.98075 6.05885 3.83071 5.93864 3.66067L4.39594 1.49012C4.27573 1.32008 4.12547 1.20005 3.94515 1.12003C3.77486 1.04001 3.59454 1 3.40421 1C2.91335 1 2.44252 1.21005 2.01177 1.63016C1.66116 1.96024 1.4007 2.34034 1.24042 2.74044C1.08014 3.14054 1 3.57064 1 4.03076C1 4.72093 1.16028 5.45111 1.47082 6.2113C1.79138 6.96149 2.23216 7.72168 2.78312 8.48187C3.07363 8.87197 3.37415 9.26207 3.70473 9.63216C4.35587 10.4624 5.37766 11.3526 6.07889 11.9227C6.15903 11.9927 6.23917 12.0528 6.32933 12.1128C6.63987 12.3528 6.85024 12.5129 6.85024 12.5129C7.61157 13.063 8.38292 13.5031 9.14425 13.8332C9.9156 14.1633 10.6369 14.3233 11.3181 14.3233C11.7789 14.3233 12.2096 14.2333 12.6003 14.0733C12.6003 14.0733 12.6103 14.0733 12.6203 14.0733C13.0311 13.9032 13.3917 13.6432 13.7122 13.2831C13.9026 13.073 14.0528 12.843 14.163 12.6029C14.1931 12.5529 14.2131 12.4929 14.2332 12.4429C14.3033 12.2528 14.3333 12.0628 14.3333 11.8727C14.3333 11.6827 14.2933 11.5226 14.2231 11.3526L14.2432 11.3726Z" fill="currentColor"></path></svg>
      </span>
      <button style={{borderColor: "#0266da" , borderRadius: "18px", padding: "10px", backgroundColor: "White" }}>Login</button>
    </div>
    
  </div>
}

function PromoBanner() {
  return (
    <a href="/jee" style={style.banner}>
      {/*Left Gradient */}
      <div style={{...style.bgStripe, left: 0, opacity: 1, width: '230px'}} ></div>
      <div style={{...style.bgStripe, left: '60px', opacity: 0.6, width: '230px'}} ></div>
      <div style={{...style.bgStripe, left: '120px', opacity: 0.4, width: '230px'}} ></div>

       {/* Right gradients */}
      <div style={{ ...style.bgStripe, right: 0, opacity: 1, width: '230px' }}></div>
      <div style={{ ...style.bgStripe, right: '60px', opacity: 0.6, width: '230px' }}></div>
      <div style={{ ...style.bgStripe, right: '120px', opacity: 0.4, width: '230px' }}></div>

      <div style={{display: "flex"}}>
        <img style={style.leftImage} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1742470224/xrn4kdjcvqwryagi0q0r.png?_upload_ref=ic_img_tool&__ar__=1.00" alt="" />

        <div style={{display: "flex", alignItems: "center"}}>
          <span style={style.offerText}>Get up to 90% Scholarship</span>
          <p style={style.description}>on JEE Live Online Course</p>
        </div>

        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733810195/zey5b8tscj7ribv0xga4.svg?_upload_ref=ic_img_tool&__ar__=1.04" alt="" style={style.rightImage}/>
      </div>
      
    </a>
  );
}

const style = {
  banner: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "38px",
    padding: "0 16px",
    backgroundColor: '#059669',
    overflow: 'hidden',
    color: 'white',
    textDecoration: 'none',
    zIndex: 1
  },
  bgStripe: {
    position: 'absolute',
    height: '100%', 
    top: '0', 
    pointerEvents: 'none', 
    zIndex: 0,
    backgroundImage: `repeating-linear-gradient(90deg, rgba(8, 184, 142, 0.8), rgba(8, 184, 142, 0.8) 1.5px, transparent 1px, transparent 30px),
                       repeating-linear-gradient(0deg, rgba(8, 184, 142, 0.8), rgba(8, 184, 142, 0.8) 1.5px, transparent 1px, transparent 20px)`
  },
  leftImage: {
    width: "auto",
    height: "30px",
    marginLeft: "12px",
    marginRight: "2px",
    zIndex: 1

  }, 
  offerText: {
    color: '#f8fd05',
    fontSize: '12px',
    textTransform: 'uppercase',
    display: 'block',
    zIndex: 1,
    marginRight: "8px"
  },
  description: {
    fontSize: '14px',
    fontWeight: '600',
    margin: 0,
    zIndex: 1
  }, 
  rightImage: {
    marginRight: "auto",
    width: "32px", 
    height: "32px",
    zIndex: 1
  }
}

function Section1() {

  return <div style={{backgroundColor: "#edf2fa", display: "flex",alignItems: "center", justifyContent: "center", padding: "36px 0 36px 0" }}>
    <img width="1032px"  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1748867651/donezphcurfqzw8yoz7t.png?_upload_ref=ic_img_tool&__ar__=2.42" alt="" />
  </div>
}

function Section2() {
  return <div style={{display: "flex", textAlign: "center", flexDirection: "column", padding: "36px 0 36px 0" }}>
    <h2 style={{display: "flex", marginLeft: "414px"}}>Pick the right course for you</h2>
    <div style={{display: "flex", justifyContent: "center", gap: "33px"}}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start",padding: "24px", boxSizing: "border-box", backgroundImage: `url("https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp")`,backgroundSize: 'contain',backgroundRepeat: "no-repeat" ,backgroundColor: "#edf2fa", borderRadius:"15px" , width: "320px", height: "240px"  }} >
        <h3>JEE Courses</h3>
        <div style={{display: "flex", alignContent: "center", alignItems: "center"}}>
          <h3 style={{color: "#0266da"}}>View Courses</h3>
          <svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="#0266DA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
        </div>
      </div>
     <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start",padding: "24px", boxSizing: "border-box",backgroundImage: `url("https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp")`,backgroundSize: 'contain',backgroundRepeat: "no-repeat" ,backgroundColor: "#edf2fa", borderRadius:"15px" , width: "320px", height: "240px"  }} >
        <h3>NEET Courses</h3>
        <div style={{display: "flex", alignContent: "center", alignItems: "center"}}>
          <h3 style={{color: "#0266da"}}>View Courses</h3>
          <svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="#0266DA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start",padding: "24px", boxSizing: "border-box",backgroundImage: `url("https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp")`,backgroundSize: 'contain',backgroundRepeat: "no-repeat" ,backgroundColor: "#edf2fa", borderRadius:"15px" , width: "320px", height: "240px"  }} >
        <h3>Courses for class 6-10</h3>
        <div style={{display: "flex", alignContent: "center", alignItems: "center"}}>
          <h3 style={{color: "#0266da"}}>View Courses</h3>
          <svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="#0266DA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
        </div>
        
      </div>
    </div>
    
    
  </div>
}

function Section3() {

  return <div style={{backgroundColor: "#edf2fa", padding: "36px 0 36px 0", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
    <img width="1032px" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749106875/srbqdtqtkycswfvpfm3l.png?_upload_ref=ic_img_tool&__ar__=2.52" alt="" />
    <ImageScroller />
    <div style={{marginTop: "48px", display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", alignItems: "center"}}>
      <h2>Meet Our 2024 Champions</h2>
      <img width="1032px" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1748856353/hibbl78evc8dcj2ax0c3.png?_upload_ref=ic_img_tool&__ar__=3.38" alt="" />
    </div>
  </div>

}


export default App
