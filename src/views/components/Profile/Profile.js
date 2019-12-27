import React, { Component } from 'react'
import './Profile.css'
import profileImg from '../../../assets/imgs/profile.jpg'

export class Profile extends Component {
    state = {
        languageEn: '',
        languageFr: 'font-weight-bold',
        role: ''
    }
    highlight = (language) => {
        language === 'fr' ? this.setState({
            languageEn: '',
            languageFr: 'font-weight-bold'
        }) : this.setState({
            languageEn: 'font-weight-bold',
            languageFr: ''
        })
    }

    componentDidMount() {
        const login = localStorage.getItem("login");
        this.setState({ role: login })
    }

    render() {

        const { context: { state: { contains: { default: language } } } } = this.props
        const { context } = this.props
        const { role } = this.state;

        return (
            <section className="profile-section">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-sm-12 text-center pb-4">
                            <h3>Paramètres du compte</h3>
                            <hr />
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 mt-3 d-flex flex-column align-items-center">
                            <img src={profileImg} className="img-fluid rounded-circle" alt="" width="200" height="200" />
                            <h5 className="mt-3 text-center"><strong>{"Nom d'utilisateur"}</strong></h5>
                            <h6 className="text-center">{"email@ddddd.ccc"}</h6>
                            <button className="btn btn-danger btn-sm mt-2 del-btn">Supprimer mon compte</button>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <h5 className="py-3">Mettre à jour mes informations</h5>
                            <form>
                                <input className="form-control mb-2" placeholder={language.signUp.form.username} onChange={this.handleUsernameChange} />
                                <input className="form-control mb-2" placeholder={language.signUp.form.lastName} onChange={this.handleLastNameChange} />
                                <input className="form-control mb-2" placeholder={language.signUp.form.firstName} onChange={this.handleFirstNameChange} />
                                <input className="form-control mb-2" placeholder={language.signUp.form.email} onChange={this.handleEmailChange} />
                                <input className="form-control mb-2" placeholder={language.signUp.form.phone} onChange={this.handlePhoneChange} />
                                <input className="form-control mb-2" placeholder={language.signUp.form.adresse} onChange={this.handleAdressChange} d />
                                <button className="btn btn-danger"  type="submit" onClick={(e) => this.handleSubmit(e)}>Enregistrer</button>
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-4">
                            <h5 className="py-3">Réinitialiser votre mot de passe</h5>
                            <form >
                                <input className="form-control mb-2" type="password" name="password1" placeholder={language.signUp.form.lastPassword} />
                                <input className="form-control mb-2" type="password" onChange={(e) => this.handleInputChange(e)} name="newpassword1" placeholder={language.signUp.form.newPassword} />
                                <input className="form-control mb-2" type="password" onChange={(e) => this.handleInputChange(e)} name="newpassword2" placeholder={language.signUp.form.confirmPassword}/>
                                <button className="btn btn-danger" type="submit" onClick={(e) => this.handleSubmit(e)}>Enregistrer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}