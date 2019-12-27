import React, {Component} from 'react'
import signUpBackground from '../../../assets/imgs/cameraBackground.jpeg'
import {connect} from 'react-redux';
import {startLoader} from '../../../redux/actions/loader'
import AccountCreationForm from '../Superadmin/AccountCreationForm';
import {startSignup} from '../../../redux/actions/signup'

class Contact extends Component 
{
    form = {
        email:"",
        firstName:"",
        lastName:"",
        address:"",
        phone:"",
        password:"",

    }
    
    render()
    {
        console.log(this.props.profile)
       const {username,phoneNumber,lastName,firstNane,email} = this.props.profile
     const {context : {state : {contains : {default :language}}}} = this.props
    return  <main style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${signUpBackground})`,backgroundPosition: "center",backgroundSize:"cover"}}>
    <div className="container d-flex flex-row pl-sm-2 pl-1 pr-1 pr-sm-2 justify-content-center align-items-center" style={{height:"110vh"}}>
    <div className="rounded row border border-light shadow  pt-1 pl-1 pr-1 pb-1 pl-sm-2 pr-sm-2 bg-white" style={{width:"50rem"}}>

    <div className="col-md-10 m-auto align-self-center text-center pl-sm-5 pb-5 pr-sm-5 pl-3 pr-3 pt-5">
    <AccountCreationForm handleUsernameChange={(v)=>this.form.username=v.target.value}
                                        email={email}
                                        phone={phoneNumber}
                                        lastName={lastName}
                                        firstName={firstNane}
                                        email={email}
                                        handleEmailChange={v=>this.form.email=v.target.value}
                                        handleFirstNameChange= {v=>this.form.firstName=v.target.value} 
                                        handleLastNameChange = {v=>this.form.lastName=v.target.value}
                                        handleAddressChange={v=>this.form.address=v.target.value}
                                        handlePhoneChange={v=>this.form.phone=v.target.value}
                                        handlePasswordChange={v=>this.form.password=v.target.value}
                                        handleSubmit={() => {this.props.startLoader();this.props.startSignup({...this.form,repassword: this.form.password},true)}}
                                    />
    </div>
</div>
</div>
</main>
}
}

const mapDispatchToProps = dispatch => {
    return {
        startLoader : ()=>dispatch(startLoader()),
        startSignup: (form,update)=>dispatch(startSignup(form,update))
    }
}

const UpdateProfil = connect(state=>({profile:state.profile.user}), mapDispatchToProps)(Contact)
export {UpdateProfil}