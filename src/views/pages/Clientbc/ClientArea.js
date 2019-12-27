import React, { Component, Fragment } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link, Route, NavLink } from 'react-router-dom'
import logo from '../../../assets/imgs/logo.png';
import { ProfileIcon } from '../../components';
import {SavedVideos, Account, Incidences, Options, Erp} from '../../pages';
import './ClientArea.css'

export class ClientArea extends Component {
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
            <Fragment>
                <section className="client-space-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex flex-row justify-content-between p-3 w-100">
                                    <div className="font-weight-bold font-italic">
                                        <img src={logo} alt="" width={100} />
                                    </div>
                                    <div>
                                        <Dropdown drop="left" className="mr-3 mr-sm-0">
                                            <Dropdown.Toggle as={ProfileIcon(localStorage.getItem("login"))}>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link className="dropdown-item" to="/my-space">{language.monespace}</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item>
                                                    <Link className="dropdown-item" to="/profile">{language.profile}</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item>
                                                    <Link className="dropdown-item" onClick={this.handleSignOut} to="/">{language.signOut}</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <ul id="top_links">
                                            <li className={`${this.state.languageFr} hand_pointer`} onClick={() => { context.changeLanguage("fr"); this.highlight("fr") }}>{language.header1.language.button1}</li>
                                            <li className={`${this.state.languageEn} hand_pointer`} onClick={() => { context.changeLanguage("en"); this.highlight("en") }} >{language.header1.language.button2}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-section">
                    <div className="container-fluid">
                        <div className="row justify-content-between">
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-12 mt-5">
                                <div className="d-flex justify-content-center mb-5 link-wrapper">
                                    <NavLink to="/my-space/videos" className="mx-2 link">{language.clientbc.menu.title1}</NavLink>
                                    <NavLink to="/my-space/erp" className="link mx-2">Mon Panel</NavLink>
                                    <NavLink to="/my-space/account" className="link mx-2">{language.clientbc.menu.title2}</NavLink>
                                    <NavLink to="/my-space/incidences" className="link mx-2">Incidences</NavLink>
                                    <NavLink to="/my-space/options" className="link mx-2">{language.clientbc.menu.title3}</NavLink>
                                </div>
                            </div>
                        </div>
                        <Route path="/my-space" exact component={() => <SavedVideos context={context} />} />
                        <Route path="/my-space/videos" exact component={() => <SavedVideos context={context}/>} />
                        <Route path="/my-space/account" exact component={() => <Account context={context}/>} />
                        <Route path="/my-space/options" exact component={() => <Options context={context}/>} />
                        <Route path="/my-space/incidences" exact component={() => <Incidences context={context}/>} />
                        <Route path="/my-space/erp" component={() => <Erp context={context}/>} />
                    </div>
                </section>
            </Fragment>
        )
    }
}