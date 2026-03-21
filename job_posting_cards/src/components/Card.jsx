import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (

        <div className="card">
            <div className="top">
                <div className='logo'><img src={props.image}></img> </div>
                <button>Save <Bookmark size={16} strokeWidth={1} /></button>
            </div>
            <div className="center">
                <div className="ama">
                    <h3>{props.name}</h3>
                    <p>{props.posted}</p>
                </div>
                <h2 className='senior'>{props.jobrole}</h2>
                <div className="time">
                    <h5>{props.tag1}</h5>
                    <h5>{props.tag2}</h5>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <h4>{props.payout}</h4>
                    <p>{props.location}</p>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    )
}

export default Card
