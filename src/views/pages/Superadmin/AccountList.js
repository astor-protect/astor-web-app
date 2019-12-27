import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import AccountItem from './AccountItem';
import Modal from 'react-bootstrap/Modal';
import { MyLoader } from "../../components";
import './AccountList.css';
import AccountCreationForm from './AccountCreationForm';
import { startLoader } from "../../../redux/actions/loader";
import { getUsersListStart} from "../../../redux/actions/admin";
import { startSignup} from "../../../redux/actions/signup";

class Account extends Component {
    form = {
        username: "",
        email: "",
        phone: "",
        address:"",
        password: "",
        repassword: "",
        firstName: "",
        lastName : "",
        role: "ROLE_ADMINISTRATEUR",
        enabled : "true"
    }
    state = {
        showModal: false,
        
    }

    showModal = () => {
        this.setState({showModal: true });
    }

   
    componentDidMount(){
        if(this.props.userList.length==0)
        {
         this.props.startLoader()
        this.props.getUsersListStart(this.props.role)
        }
        if(this.props.status)
        {
         this.props.startLoader()
        this.props.getUsersListStart(this.props.role)
        }
    }
    
    
    

    render() {
        let {role,language} = this.props
        role = role.trim()
        return (
            <Fragment>
                <MyLoader />
                 <div className="container-fluid pl-5 pr-5 pt-3 d-flex flex-column account-list">
                    <div className="row">
                        <div className="col">
                               {/* For Admin and Super admin */}
                            {["ROLE_ADMINISTRATEUR","ROLE_SUPER_ADMINISTRATEUR"].includes(role)&&<table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Nom</th>
                                            <th scope="col">Prénom</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Téléphone</th>
                                            <th scope="col" style={{ width: "200px", textAlign: "center" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ border: "solid 1px #e1e1e1", backgroundColor: "white" }}>
                                        {this.props.userList.map((v,i)=>
                                        <AccountItem
                                            id={i}
                                            key={v.iduser}
                                            iduser={v.iduser}
                                            role={role}
                                            username={v.username}
                                            firstname={v.firstName}
                                            lastname={v.lastName}
                                            email={v.email}
                                            tel={v.phone}
                                            displayConfirmation={this.displayConfirmationModal}
                                        />
                                        )}
                                        
                                    </tbody>
                                </table>}
                        </div>
                    </div>
                             {/* For super admin */}
                    {
                        role === "ROLE_SUPER_ADMINISTRATEUR"&&<div className="row mt-auto">
                            <div className="col d-flex">
                                <button onClick={this.showModal} className="btn btn-danger btn-sm add-btn ml-auto mt-3"><FontAwesomeIcon icon={faUserPlus} /> Ajouter un compte</button>
                            </div>
                        </div>}
                </div>
                <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} size="md" >
                    <Modal.Header closeButton>
                        <h5>{language.accountCreationAdmin}</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12  mt-4 mb-3">
                                    <AccountCreationForm handleUsernameChange={(v)=>this.form.username=v.target.value}
                                        handleEmailChange={v=>this.form.email=v.target.value}
                                        handleFirstNameChange= {v=>this.form.firstName=v.target.value} 
                                        handleLastNameChange = {v=>this.form.lastName=v.target.value}
                                        handleAddressChange={v=>this.form.address=v.target.value}
                                        handlePhoneChange={v=>this.form.phone=v.target.value}
                                        handlePasswordChange={v=>this.form.password=v.target.value}
                                        value={this.form}
                                        handleSubmit={() => {this.props.startLoader();this.props.startSignup({...this.form,repassword: this.form.password})}}
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    }
}

const mapPropsToState = state => {
    return {
        userList: state.admin.userList,
        status:state.admin.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startSignup: (data) => dispatch(startSignup(data)), 
        startLoader: () => dispatch(startLoader()),  
        getUsersListStart: (role)=>dispatch(getUsersListStart(role))
    }
}

const AccountList = connect(mapPropsToState, mapDispatchToProps)(Account)
export { AccountList}