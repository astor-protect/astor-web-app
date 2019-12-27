import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Confirmation } from '../../components'
import './UserInfos.css'
import { connect } from 'react-redux'
import { activateUser } from '../../../redux/actions/admin'
import { startLoader } from '../../../redux/actions/loader'
import { getUsersListStart, deleteUser,changeAccountType} from '../../../redux/actions/admin'
import { withRouter } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import {ROLES} from '../../../consts/app'

class UserInfos1 extends Component {

    state = {
        displayConfirmationModal: false
    }

    displayConfirmationModal = (username) => {
        this.setState({ displayConfirmationModal: true });
    }

    hideConfirmationModal = () => {
        this.setState({ displayConfirmationModal: false });
    }
    componentDidMount() {
        if (this.props.userList.length == 0) {
            this.props.startLoader()
            this.props.getUsersListStart()
        }

    }
    componentDidUpdate() {
        this.props.status && setTimeout(() => this.props.history.push("/dashboard"), 3000)
    }

    render() {
        const { id, language, userList } = this.props
        const list = userList.length == 0 ? { username: "", lastName: "", firstName: "", email: "", phone: "", role: "", enabled: false } : (userList.filter((v, i) => i == id)[0])

        const { username, lastName, firstName, email, phone, role, enabled } = list
        return <div className="container-fluid pl-5 pr-5 pt-3 d-flex flex-column account-info">
            {this.state.displayConfirmationModal && <Confirmation id={email} confirmation={(email) => this.props.deleteUser(email)} hideConfirmationModal={this.hideConfirmationModal} />}
            <div className="row justify-content-between">
                <div className="col-sm-12 mb-3 d-flex align-content-center justify-content-between">
                    <h5>Informations sur le compte
                        {this.props.status && <p className="text_secondary">{language.deleteSuccess}</p>}
                    </h5>

                    <Link to="/dashboard" className="btn btn-outline-dark btn-sm">Retour</Link>
                </div>
                <div className="col-sm-12 col-md-6 account">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td><strong>Username</strong></td>
                                <td>{username}</td>
                            </tr>
                            <tr>
                                <td><strong>Noms</strong></td>
                                <td>{lastName}</td>
                            </tr>
                            <tr>
                                <td><strong>Prénoms</strong></td>
                                <td>{firstName}</td>
                            </tr>
                            <tr>
                                <td><strong>Email</strong></td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td><strong>Téléphone</strong></td>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <td><strong>Type de compte</strong></td>
                                <td>{role}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-between mt-3">
                        <Dropdown drop='up' className="mr-3 text-dark mr-sm-0">
                            <Dropdown.Toggle as={({onClick}) => <button className="btn btn-dark btn-sm" onClick={(e)=>onClick(e)}>Changer le type de compte</button>}>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {ROLES.map((v,i)=><>
                                <Dropdown.Item key={i.toString()} className="menu_item" onClick={()=>{this.props.startLoader();this.props.changeAccountType(v,id,email)}}>
                                    <span >{v}</span>
                                </Dropdown.Item><Dropdown.Divider /></>)}
                            </Dropdown.Menu>
                        </Dropdown>

                        {enabled ? <button className="btn btn-dark btn-sm" onClick={() => { this.props.startLoader(); this.props.activateUser(email, id, false) }}>{language.desactivate}</button>
                            : <button className="btn btn-dark btn-sm" onClick={() => { this.props.startLoader(); this.props.activateUser(email, id, true) }}>{language.activate}</button>}

                        <button onClick={this.displayConfirmationModal} className="btn btn-danger btn-sm">Supprimer</button>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 p-3 payment-infos d-flex flex-column">
                    <div className="">
                        <h6>Etat des Paiements</h6>
                        <table className="table table-bordered mt-3">
                            <tbody>
                                <tr>
                                    <td><strong>Montant</strong></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><strong>Date</strong></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><strong>Infos</strong></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-auto">
                        <h6>Historique des Paiements</h6>
                        <table className="table table-bordered mt-3">
                            <tbody>
                                <tr>
                                    <td><strong>Montant</strong></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><strong>Date</strong></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><strong>Infos</strong></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    }
}
export const UserInfos = connect(state => ({ status: state.admin.status, userList: state.admin.userList }), { activateUser, deleteUser, startLoader, getUsersListStart,changeAccountType})(withRouter(UserInfos1))
