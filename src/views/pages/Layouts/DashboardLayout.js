import React, { Component } from 'react'
import './DashboardLayout.css'
import profile from '../../../assets/imgs/profile.jpg'
import { Link, Route, Switch, NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { ProfileIcon } from '../../components'
import { get } from '../../../helpers/localStorage'
import logo from '../../../assets/imgs/logo.png';
import { UserInfos, Facturation, Approvisionnement, GestionTickets, Accountance, AccountList, UsersStats } from '../../pages';
import { connect } from 'react-redux'
import { startLogout } from '../../../redux/actions/logout'

class MyDropDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            icon: this.props.icon1
        }
    }
    handleClick = () => {
        this.setState({
            show: !this.state.show,
            icon: this.props.icon1 == this.state.icon ? this.props.icon2 : this.props.icon1
        })
    }
    render() {

        const { show, icon } = this.state
        const { children, title } = this.props
        return <div >
            <div style={{ backgroundColor: "#e20713", color: "white" }} className="d-flex flex-row justify-content-between side_font_size pt-3 pb-3 pl-2 pr-2" onClick={this.handleClick}>
                <div><span>{title} </span></div>
                <div><i className={`fa fa-${icon} fa-1x text-white`}></i></div>
            </div>
            {show && children}
        </div>

    }
}
class DashboardLayout1 extends Component {
    state = {

        languageEn: '',
        languageFr: 'font-weight-bold',
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



    render() {

        const { context: { state: { contains: { default: language } } } } = this.props
        const { context } = this.props
        return <main className="layout row no-gutters m-0">
            <section className="side_bar col-2 p-0">
                <div className="text-center p-2 mb-2">
                    <img src={this.props.photourl?this.props.photourl:profile} alt="" height={80} className="img-fluid rounded-circle " />
                    <span className="font-weight-bold" style={{ fontSize: "1.1rem" }}>{localStorage.getItem("login")}</span>
                </div>
                <div>
                    <MyDropDown icon1="chevron-down" icon2="chevron-up" title={language.dashboardPage.sideBar.tableau.title}>
                        <div className="text-right pt-1 pb-1 font-weight-bold p-2" style={{ backgroundColor: "#edbbbc" }}>
                            <NavLink to="/dashboard">{language.dashboardPage.sideBar.tableau.items[0]}</NavLink>
                        </div>
                        <div className="text-right pt-1 pb-1  p-2" style={{ backgroundColor: "#edbbbc" }}>
                            <NavLink to="/dashboard/users-stats">{language.dashboardPage.sideBar.tableau.items[1]}</NavLink>
                        </div>
                    </MyDropDown>
                    <div className="mb-3"></div>
                    <MyDropDown icon1="chevron-down" icon2="chevron-up" title={language.dashboardPage.sideBar.erp.title}>
                        <div className="text-right pt-1 pb-1  p-2" style={{ backgroundColor: "#edbbbc" }}>
                            <NavLink to="/dashboard/facturation">Facturation</NavLink>
                        </div>
                        <div className="text-right pt-1 pb-1  p-2" style={{ backgroundColor: "#edbbbc" }}>
                            <NavLink to="/dashboard/approvisionnement">Approvisionnement</NavLink>
                        </div>
                        <div className="text-right pt-1 pb-1  p-2" style={{ backgroundColor: "#edbbbc" }}>
                            <NavLink to="/dashboard/tickets">Gestion des Tickets</NavLink>
                        </div>
                        <div className="text-right pt-1 pb-1  p-2" style={{ backgroundColor: "#edbbbc" }}>
                            <NavLink to="/dashboard/accountance">Comptabilité</NavLink>
                        </div>
                    </MyDropDown>
                </div>

            </section>

            <section className="main_content col-10 p-0">
                <div className="d-flex flex-row justify-content-between p-3 w-100">
                    <div className="font-weight-bold font-italic">
                        <Link to="/"><img src={logo} alt="" width={100} /></Link>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">

                        <ul id="top_links">
                            <li className={`${this.state.languageFr} hand_pointer`} onClick={() => { context.changeLanguage("fr"); this.highlight("fr") }}>{language.header1.language.button1}</li>
                            <li className={`${this.state.languageEn} hand_pointer`} onClick={() => { context.changeLanguage("en"); this.highlight("en") }} >{language.header1.language.button2}</li>
                        </ul>
                        <Dropdown drop="left" className="mr-3 mr-sm-0">
                            <Dropdown.Toggle as={ProfileIcon({ username: this.props.authUser.username, role: this.props.authUser.role,photourl:this.props.photourl})}>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link className="dropdown-item" to="/dashboard">{language.dashboard}</Link>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <Link className="dropdown-item" onClick={this.props.startLogout} to="/">{language.signOut}</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="text-left w-100 pl-5">
                    {/* <h3>{language.dashboardPage.sideBar.tableau.items[0]}</h3> */}
                </div>
                <Switch>
                    <Route exact path="/dashboard/users-stats" component={UsersStats} />
                    <Route exact path="/dashboard/facturation" component={() => <Facturation />} />
                    <Route exact path="/dashboard/approvisionnement" component={() => <Approvisionnement />} />
                    <Route exact path="/dashboard/tickets" component={() => <GestionTickets />} />
                    <Route exact path="/dashboard/accountance" component={() => <Accountance />} />
                    <Route exact path="/dashboard/usersinfos/:id" component={(props) => <UserInfos {...props} id={props.match.params.id} language={language} />} />
                    <Route exact path="/dashboard" component={() => <AccountList role={this.props.authUser.role} language={language}/>} />

                </Switch>
            </section>

        </main>
    }
}
const DashboardLayout = connect((state) => ({ authUser: state.logIn.authUser,photourl:state.profile.user.photourl}), { startLogout })(DashboardLayout1)
export { DashboardLayout }