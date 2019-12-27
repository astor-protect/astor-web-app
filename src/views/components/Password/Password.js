import React,{Component} from 'react'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {WithIcon} from '../index'
import PropTypes from 'prop-types'
export class Password extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {hide:true}
    }
    handleClick= () =>
    {
        this.setState({hide:!this.state.hide})
        
       //this.nameInput.focus()
    }
   /*  refe = (input)=>
    {
        this.nameInput = input
    } */
    
    render(){
    const {placeholder,className,style,onChange} = this.props
    const {hide} = this.state
       return (WithIcon(hide?faEyeSlash:faEye,"gray",{right:".7rem"},this.handleClick,className)(<input type={`${hide?'password': 'input'}`} style={style}  className={`form-control `} onChange={onChange} placeholder={placeholder} name="password" />))
      
    }
}
         
Password.propTypes = {
placeholder: PropTypes.string,
className : PropTypes.string,
style : PropTypes.object
}
