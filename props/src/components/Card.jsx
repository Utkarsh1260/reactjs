import React from 'react'


const Card = ({ user, categ, image, desc }) => {

      console.log(user, categ, image); 
    return (
        <div>
            <div >
                <div className='card'>
                    <img src={image} alt="profile"></img>
                    <h1>{user}</h1>
                    <h4>{categ}</h4>
                    <p>{desc}</p>
                    <button>View Profile</button>
                </div>
            </div>

        </div>
    )
}

export default Card
