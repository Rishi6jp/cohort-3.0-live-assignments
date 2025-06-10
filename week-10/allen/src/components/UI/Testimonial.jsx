import "../Section5.css"

export const Testimonial = ({data}) => {

    const {mesg, src, name, rank } = data
    return (
        <div className="card">
            <img style={{position: "absolute", left: "10%", top: "-5%", zIndex: "1"}} src="https://allen.in/quotes.svg" alt="" />
            <div style={{padding: "0 24px 24px"}}>
               <p style={{paddingTop: "40px", color: "#494A4A"}}>{mesg}</p>
                <div style={{display: "flex", alignItems: "center", position: "absolute", justifyContent: "flex-start", justifyItems: "baseline", bottom: "5%"}}>
                    <img className="card-img" src={src} alt="" />
                    <div style={{width: "50%"}} >
                        <h2 style={{fontSize: "medium", margin: 0}}>{name}</h2>
                        <p style={{color: "#494A4A", margin: 0}}>{rank}</p>
                    </div>
                
                </div> 
            </div>
            
            
        </div>
    )
    

}