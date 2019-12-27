import React from 'react'
import {Color} from '../../../consts/Color'
import profile from '../../../assets//imgs/profile.jpg'

export const ProfileIcon = (login)=>({onClick})=>{
    const handleClick = (e)=>onClick(e)
    return <button onClick={handleClick} className="btn p-0 font-weight-bold dropdown-toggle">
        <strong style={{color:Color.secondary_color,fontSize:10}}>{login.role.substr(5)}</strong><br/>
        {login.photourl==null?<img src={profile} style={{height: "20px",width:"25px"}} className="img-fluild mr-1 rounded-circle"/>
        :<img src={login.photourl} style={{height: "20px",width:"25px"}} className="img-fluild mr-1 rounded-circle"/>}
        <strong style={{color: "black"}}>{login.username}</strong>
    </button>
}