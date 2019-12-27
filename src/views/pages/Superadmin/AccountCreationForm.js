import React, { Component } from 'react'
import { Password } from '../../components';
import PropTypes from 'prop-types'

export class AccountCreationForm extends Component {
    constructor(props)
    {
        super(props)
    }
    state={
        username: this.props.username,
        email: this.props.email,
        phone: this.props.phone,
        address:this.props.address,
        firstName: this.props.firstName,
        lastName : this.props.lastName
    }
    handleUsernameChange = e=>{
        this.props.handleUsernameChange(e)
        this.setState({...this.state,username:e.target.value})
    }
    handleLastNameChange = e=>{
        this.props.handleLastNameChange(e)
        this.setState({...this.state,lastName:e.target.value})
    }
    handleFirstNameChange = e=>{
        this.props.handleFirstNameChange(e)
        this.setState({...this.state,firstName:e.target.value})
    }
    handleEmailChange = e=>{
        this.props.handleEmailChange(e)
        this.setState({...this.state,email:e.target.value})
    }
    handlePhoneChange = e=>{
        this.props.handlePhoneChange(e)
        this.setState({...this.state,phone:e.target.value})
    }
    handlePasswordChange = e=>{
        this.props.handlePasswordChange(e)
        this.setState({...this.state,password:e.target.value})
    }
    handleAddressChange = e=>{
        this.props.handleAddressChange(e)
        this.setState({...this.state,address:e.target.value})
    }
    handleSubmit= e=>{
        this.props.handleSubmit()
        this.setState({ username: "",
        email: "",
        phone: "",
        address:"",
        firstName: "",
        lastName : ""})
    }
    render() {
        return (
            <div className="col-sm-12  align-self-center text-right pb-3 ">
                <h5 className="text-left pb-2">Remplissez le formulaire</h5>
                <input className="form-control mb-2" value={this.state.username}  placeholder={"Username"} onChange={this.handleUsernameChange} />
                <input className="form-control mb-2" value={this.state.lastName}   placeholder={"Noms"}  onChange={this.handleLastNameChange}/>
                <input className="form-control mb-2" value={this.state.firstName}   placeholder={"Prénoms"} onChange={this.handleFirstNameChange}/>
                <input className="form-control mb-2" value={this.state.email}  placeholder={"Email"} onChange={this.handleEmailChange}/>
                <input className="form-control mb-2"  value={this.state.phone}  placeholder={"Téléphone"}  onChange={this.handlePhoneChange}/>
                <input className="form-control mb-2"  value={this.state.address}   placeholder={"Adresse"}  onChange={this.handleAddressChange}/>
                <Password placeholder={"Mot de passe"}    className="mb-2" onChange={this.handlePasswordChange}/>
                <button className="btn red inscription_btn ml-auto d-block mt-3" onClick={this.handleSubmit}>{"Enregistrer le compte"}</button>
               
            </div>
        )
    }
}

AccountCreationForm.propTypes = {
    handleUserNameChange : PropTypes.func,
    handleLastNameChange : PropTypes.func,
    handleFirstNameChange : PropTypes.func,
    handlePhoneChange : PropTypes.func,
    handleEmailChange : PropTypes.func,
    handleAddressChange : PropTypes.func,
    handlePasswordChange : PropTypes.func,
    value : PropTypes.object,
    handleSubmit: PropTypes.func
}
export default AccountCreationForm;
