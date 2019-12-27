import React from 'react';
import PropTypes from "prop-types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const WithIcon = (name=false,color="",position={},handleClick=()=>{},className)=> input=><div className={className} style={{position:"relative"}}>
    {input}
    <div onClick={handleClick} style={{position:"absolute", right: position.right,left:position.left,transform:"translateY(-50%)", top:"50%"}} >
        {name&&<FontAwesomeIcon icon={name} color={color} />}
    </div>
</div>

WithIcon.PropTypes = {
    name : PropTypes.any,
    color: PropTypes.string,
    input : PropTypes.any,
    handleClick: PropTypes.func,
    className : PropTypes.string
}