import React, { Component, Fragment } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link, Route, NavLink } from 'react-router-dom'
import logo from '../../../assets/imgs/logo.png';
import { ProfileIcon } from '../../components';
import { CatalogueProduit, ResallerErp, Agenda, Notifications, History } from '../../pages';
import './Resaller.css'

export class Resaller extends Component {
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
                                    <NavLink to="/resaller/products" className="mx-2 link">Catalogue de produits</NavLink>
                                    <NavLink to="/resaller/erp" className="link mx-2">Panel ERP</NavLink>
                                    <NavLink to="/resaller/agenda" className="link mx-2">Agenda Installateurs</NavLink>
                                    <NavLink to="/resaller/notifications" className="link mx-2">Notifications</NavLink>
                                    <NavLink to="/resaller/history" className="link mx-2">Historique</NavLink>
                                </div>
                            </div>
                        </div>
                        <Route path="/resaller" exact component={() => <CatalogueProduit context={context} />} />
                        <Route path="/resaller/products" exact component={() => <CatalogueProduit context={context} />} />
                        <Route path="/resaller/erp" component={() => <ResallerErp context={context} />} />
                        <Route path="/resaller/agenda" component={() => <Agenda context={context} />} />
                        <Route path="/resaller/notifications" component={() => <Notifications context={context} />} />
                        <Route path="/resaller/history" component={() => <History context={context} />} />
                    </div>
                </section>
            </Fragment>
        )
    }
}