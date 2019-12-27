import React from 'react'
import {Color} from '../../../consts/Color'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
export const ImgD = ({src,withPlus})=><div style={{width: 58,color:Color.secondary_color}} className="mt-1 mb-1 ml-1 d-flex flex-row align-items-center justify-content-between"><div style={{backgroundColor: Color.secondary_color,width:"fit-content",padding:"5px",borderRadius: "6px"}}>
    <img src={src} alt="" style={{width: 28}}/>
    
    </div>
    {withPlus&&<FontAwesomeIcon icon={faPlus}  size="sm"/>}
    </div>
ImgD.defaultProps = {
    withPlus : true
}