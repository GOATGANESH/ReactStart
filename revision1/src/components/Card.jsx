import Button from "./Button";
import {Bookmark} from 'lucide-react'
// import Button from 'Button'
const Card = (props)=>{

  
    
   return (
    <>
        <div className="card">
            <div className="top">
       
                <img src={props.desc.brandLogo} alt={props.desc.companyName} className="img"/>
             
                <div className="save-icon">
                <span>Save</span>
                <Bookmark size={14}/>
                </div>
            </div>
            <div className="center">
                <h4>{props.desc.companyName} <span>{props.desc.datePosted}</span></h4>
                <h3>{props.desc.roll}</h3>
                <div>
                    <span>{props.desc.tag[0]}</span><span>{props.desc.tag[1]}</span>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.desc.charges}</h3>
                    <h6>{props.desc.loc}</h6>
                </div>
                <Button/>
            </div>
        </div>

    </>
   )
    
}

export default Card;
