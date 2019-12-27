import React, {Component} from 'react'
import signUpBackground from '../../../assets/imgs/cameraBackground.jpeg'
import {Color} from '../../../consts/Color'
import {Password} from '../../components'
import {connect} from 'react-redux'
import "../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {Toast} from 'react-bootstrap'
import {startSignup} from '../../../redux/actions/signup'
import {startLoader} from '../../../redux/actions/loader'
import { withRouter } from 'react-router-dom'
import {MyLoader} from '../../components';
import { PROFESSIONAL } from '../../../redux/actions/userType'
  

class  SignUp extends Component 
{
            username= ""
            password=""
            repassword=""
            firstName=""
            lastName=""
            email=""
            phone=""
            address=""
            role="ROLE_CLIENT_BC"
    state={
        
        connectionLoader : false,
        registerError : "",
        enterprise : false,
        identifiant: false,
        show:false,
           
        
    }
    handleChange = (event)=>{

        const value = event.target.value
        this.role=value
        
        if(value==="ROLE_REVENDEUR"  ) this.setState({identifiant:true,enterprise:false})
        else if( value==="ROLE_INTERVENTION"|| value==="ROLE_INSTALLATEUR") this.setState({enterprise:true,identifiant:false})
    }
    
   
    render()
    {
   const  {context : {state : {contains : {default :language}}}} = this.props
   const {enterprise,identifiant,show} = this.state
   this.props.signUpSuccess&&setTimeout(()=>this.props.history.push("/"),5000)
    return  <main style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${signUpBackground})`,backgroundPosition: "center",backgroundSize:"cover"}}>
    <MyLoader />
    <div className="container d-flex flex-row pl-sm-5 pr-sm-5 pl-2 pr-2 justify-content-center align-items-center" style={{height:"120vh"}}>
    <div className="rounded row border border-light shadow  pt-1 pb-1 pl-2 pr-2 bg-white" style={{width:"50rem"}}>
    <div className="col-md-6">
        <h1 className="mb-5 font-weight-bold" style={{color: Color.secondary_color,fontSize: "2rem"}}>{language.header2.title}</h1>
        <div className="mb-5" >{language.signUp.description}</div>
        <div  className="mb-5">
          </div>
        <p className="font-small"><i>{language.signUp.form.terms[0]} <strong>{language.signUp.form.terms[1]}</strong></i></p>
        <Toast  style={{borderColor: "red"}} show={this.props.signUpSuccess} delay={5000} autohide>
        
            <Toast.Body>{language.registerSuccess}</Toast.Body>
        </Toast>

    </div>
    <div className="col-md-6  align-self-center text-right pl-2 pb-3 pr-2 pl-sm-5 pr-sm-5 pt-3">
        <div className="text-center">
            <span className="font-italic" style={{color: "red",fontWeight:500,fontSize: "0.7rem"}}>{this.props.registerError}</span>
        </div>               
        <input className="form-control mb-2"  placeholder={language.signUp.form.username} onChange={e=>this.username=e.target.value}/>
        <input className="form-control mb-2"  placeholder={language.signUp.form.lastName} onChange={e=>this.lastName=e.target.value}/>
        <input className="form-control mb-2"  placeholder={language.signUp.form.firstName} onChange={e=>this.firstName=e.target.value}/>
        <input className="form-control mb-2"  placeholder={language.signUp.form.email} onChange={e=>this.email=e.target.value}/>
        <input className="form-control mb-2"  placeholder={language.signUp.form.phone} onChange={e=>this.phone=e.target.value}/>
        <input className="form-control mb-2"  placeholder={language.signUp.form.adresse} onChange={e=>this.address=e.target.value}/>
        {this.props.userType===PROFESSIONAL?<select className="custom-select mb-2 " style={{fontSize:"0.9rem"}} onChange={this.handleChange}>
            <option value="ROLE_CLIENT_BC">{language.signUp.form.bc}</option>
            <option value="ROLE_CLIENT_BB">{language.signUp.form.bb}</option>
    </select>:null}    
        {enterprise&&<input className="form-control mb-2" placeholder={language.signUp.form.enterprise}/>}
        {identifiant&&<input className="form-control mb-2" placeholder={language.signUp.form.identifiant}/>}
        <Password placeholder={language.signUp.form.password}  className="mb-2" onChange={e=>this.password=e.target.value}/>
        <button onClick={()=>{this.props.startLoader();this.props.startSignup({username:this.username,lastName:this.lastName,firstName:this.firstName,password:this.password,address:this.address,phone:this.phone,repassword:this.password,role:this.role,email:this.email})}}  className="btn red inscription_btn">{language.header1.inscription}</button>
    </div>
</div>
<div></div>
</div>
</main>
}
}


export default withRouter(connect((state)=>({userType:state.userType.type,registerError : state.signUp.signUpError, signUpSuccess : state.signUp.signUpSuccess}), {startSignup,startLoader})(withRouter(SignUp)))