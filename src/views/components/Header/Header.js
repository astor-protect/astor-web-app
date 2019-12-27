
import React, {Component} from 'react'
import logo from '../../../assets/imgs/logo.png'
import {Color} from '../../../consts/Color'
import {Link} from 'react-router-dom'
import {Password} from '../../components'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./Header.css"
import {Dropdown} from 'react-bootstrap'
import {ProfileIcon} from './../../components'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal';
/* importing login actions creators */
import {startLogin} from '../../../redux/actions/login'
import {startLoader} from '../../../redux/actions/loader'
import {startLogout} from '../../../redux/actions/logout'
import {requestCodeStart,resetPasswordStart,checkToken} from '../../../redux/actions/resetPassword'
import {profession,particular, PROFESSIONAL,PARTICULAR} from '../../../redux/actions/userType'
/* importing login actions creators */

const pathName = window.location.pathname
export class HeaderC extends Component
{
    // inputs
    login = ""
    password = ""
    token=""
    
    state = {
        showModal: false,
        activeLinks : [pathName==="/"?true:false,(pathName==="/#/videoprotection"||pathName==="/telesurveillance")?true:false,pathName==="/alarms"?true:false,pathName==="/how_it_works"?true:false,pathName==="/who_are_we"?true:false,pathName==="/contact_us"?true:false,pathName==="/sign_up"?true:false,pathName==="/business"?true:false,pathName==="/sectors"?true:false,pathName==="/partners"?true:false,pathName==="/who_are_we_p"?true:false]
    }
    activate = (i)=> {

       this.setState(
           {
           activeLinks : this.state.activeLinks.map((v,index)=> i==index?true:false)
           }
       )
    }
 
    
    
    showResetPasswordForm = ()=>
    {
        this.setState({showModal:true})
    }
    
    render()
    {
        const code = this.props.code
        const context = this.props.context
        const {username,role} = this.props.authUser
        const {photourl} = this.props
         const {userType} = this.props
        const {state : {contains : {default :language}}} = context
        const navItemsColors = this.state.activeLinks.map((v)=>v==true?Color.secondary_color:Color.primary_color)
       return <header>
        {/* Fist header */}
            <div className="container">
				<div className="row">
					<div className="col-sm-2 mt-1">
                        <Link to="/" className={`${this.props.userType===PARTICULAR?'font-weight-bold':''} text-dark`} onClick={()=> {this.props.particular();this.activate(0)}}>{language.header1.typeOfUser.button1} </Link>
                        <Link to="/" className={`${this.props.userType===PROFESSIONAL?'font-weight-bold':''} text-dark`} onClick={()=> {this.props.profession();this.activate(0)}}>{language.header1.typeOfUser.button2}</Link>
					</div>
                    <div className="col-sm-8 mt-1 ">
                        {this.props.logged? <></> :<><form className="row no-gutters justify-content-end">
                            <div className="col-sm-5 col-md-4 col-12 mb-1 mr-md-1 p-0 ">
                                <input style={{height:"100%"}} onChange={({target:{value}})=>this.login=value} placeholder={language.header1.loginForm.input1} className="form-control"/>
                            </div>
                            <Password onChange={({target:{value}})=>this.password=value}  className="col-sm-5 col-md-4 col-10 mb-1 mr-md-1 p-0" style={{height:"100%"}} placeholder={language.header1.loginForm.input2}/>
                            <div className="col-sm-2 col-md-1 col-2 mb-1 p-0">
                                <button type="button" onClick={()=>{this.props.startLoader();this.props.startLogin(this.login,this.password)}} className="btn connection_btn text-white w-100" style={{backgroundColor: "white", border: "1px solid #ced4da"}}><FontAwesomeIcon icon={faCheck} color="red" /></button>
                            </div>
                        
                        </form>
                        <div className="row no-gutters justify-content-end">
                            <div className="col-sm-6 col-md-6 col-12 ">
                                <span className="font-italic  mr-5" style={{color: "red",fontWeight:500,fontSize: "0.7rem"}}>{this.props.logInError}</span>
                            </div>
                            <div className="col-sm-3 col-md-3 col-12 text-right">
                                <Link to="" onClick={this.showResetPasswordForm} className="font-italic font-weight-bold text-dark" style={{fontSize: "0.7rem"}}>{language.forgotPassword}</Link>
                            </div>
                        </div>
                        
    </>}
                        </div>
					<div className="col-sm-2 p-0 col-md-1 text-center d-flex flex-column justify-content-start align-items-end">  
						<ul id="top_links">
							<li className={`${language.language==="fr"?'font-weight-bold':''} hand_pointer`} onClick={()=>{context.changeLanguage("fr")}}>{language.header1.language.button1}</li>
							<li className={`${language.language==="en"?'font-weight-bold':''} hand_pointer`} onClick={()=>{context.changeLanguage("en")}} >{language.header1.language.button2}</li>
						</ul>
                        <div className="text-right w-100">
                            {this.props.logged?<Dropdown drop='down' className="mr-3  mr-sm-0">
        <Dropdown.Toggle  as={ProfileIcon({username,role,photourl})}>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {(role.trim()=="ROLE_ADMINISTRATEUR"|| role.trim()=="ROLE_SUPER_ADMINISTRATEUR")&&<><Dropdown.Item className="menu_item">
                <Link className="dropdown-item" to="/dashboard">{language.dashboard}</Link>
            </Dropdown.Item>
            <Dropdown.Divider /></>}
            <Dropdown.Item className="menu_item">
                <Link className="dropdown-item" to="/profil">{language.profile}</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="menu_item">
                <Link className="dropdown-item" onClick={this.props.startLogout} to="/">{language.signOut}</Link>
            </Dropdown.Item>
            
        </Dropdown.Menu>
        </Dropdown> 
                            :<Link className="font-weight-bold" onClick={()=>this.activate(6)}  to="/sign_up" style={{color:navItemsColors[6]}}>{language.header1.inscription}</Link>
    }
                            </div>
                    </div>
				</div>
			</div>
        {/* Fist header */}
        {/* Second header*/}
            <div className="container">
        <div className="row align-items-center d-flex flex-row ">
            <div className="col-xs-3 pl-3">
                <div>
                    <Link to="/" className="font-weight-bold" style={{color: Color.secondary_color,fontSize: "1.5rem"}}><img width={150} height={70} src={logo}/></Link>
                </div>
            </div>
            <nav className="col-xs-9 ml-auto d-sm-flex ">
                <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" ><span>Menu </span></a>
                <div className="main-menu">
                    <div id="header_menu">
                        <a className="font-weight-bold" style={{color: Color.secondary_color,fontSize: "1.8rem"}}>{language.header2.title}</a>
                    </div>
                    <a href="#" className="open_close" id="close_in"><i className="icon_close"></i></a>
                    <ul>
                        <li className="submenu" onClick={()=>this.activate(0)} className="hand_cursor">
                            <Link to="/" href="javascript:void(0);"  style={{color: navItemsColors[0]}} >{language.header2.nav.navitem1.title}</Link>
                            
                        </li>
                        <li className="submenu">
                            <Link to="/videoprotection" href="javascript:void(0);" onClick={()=>this.activate(1)}   onClick={()=>this.activate(1)} style={{color: navItemsColors[1]}} className="show-submenu">{language.header2.nav.navitem2.title}<i className="icon-down-open-mini"></i></Link>
                            <ul>
                                {userType==PARTICULAR?<li onClick={()=>this.activate(1)} className="hand_cursor"><Link to="/videoprotection">{language.header2.nav.navitem2.navitem2navitem1}</Link></li>
                                :<>
                                <li onClick={()=>this.activate(1)} className="hand_cursor"><Link to="/videoprotection">{language.header2.nav.navitem2.navitem2navitem1P}</Link></li>
                                <li onClick={()=>this.activate(1)} className="hand_cursor"><Link to="/telesurveillance">{language.header2.nav.navitem2.navitem2navitem2}</Link></li>
                                </>}
                            </ul>
                        </li>
                        <li className="submenu" >
                            <Link href="javascript:void(0);" to="/alarms" onClick={()=>this.activate(2)}  style={{color: navItemsColors[2]}} className="show-submenu">{language.header2.nav.navitem3.title}<i className="icon-down-open-mini"></i></Link>
                            <ul>
                                <li onClick={()=>this.activate(2)} className="hand_cursor"><Link to="/alarms">{language.header2.nav.navitem3.navitem3navitem1}</Link></li>
                            </ul>
                        </li>
                        {this.props.userType ===PARTICULAR ? <>
                        <li className="submenu">
                            <Link to="/how_it_works" href="javascript:void(0);" onClick={()=>this.activate(3)}  style={{color: navItemsColors[3]}} className="show-submenu">{language.header2.nav.navitem4.title}<i className="icon-down-open-mini"></i></Link>
                            <ul>
                                <li onClick={()=>this.activate(3)} className="hand_cursor"><Link to="/how_it_works">{language.header2.nav.navitem4.navitem4navitem2}</Link></li>
                                <li onClick={()=>this.activate(3)} className="hand_cursor"><Link to="">{language.header2.nav.navitem4.navitem4navitem1}</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <Link to="" href="javascript:void(0);" onClick={()=>this.activate(4)} style={{color: navItemsColors[4]}} className="show-submenu">{language.header2.nav.navitem5.title}<i className="icon-down-open-mini"></i></Link>
                            <ul>
                                <li onClick={()=>this.activate(4)} className="hand_cursor"><Link to="">{language.header2.nav.navitem5.navitem5navitem2}</Link></li>
                                <li onClick={()=>this.activate(4)} className="hand_cursor"><Link to="">{language.header2.nav.navitem5.navitem5navitem1}</Link></li>
                            </ul>
                        </li>
                        <li className="submenu" onClick={()=>this.activate(5)} className="hand_cursor"><Link to="/contact_us" style={{color: navItemsColors[5]}}>{language.header2.nav.navitem6.title}</Link></li>
                            </>: <>
                        <li className="submenu">
                            <Link to="/business" href="javascript:void(0);" onClick={()=>this.activate(7)}  style={{color: navItemsColors[7]}} className="show-submenu">{language.header2.navProfessional.navitem4.title}<i className="icon-down-open-mini"></i></Link>
                            <ul>
                                <li onClick={()=>this.activate(7)} className="hand_cursor"><Link to="/business"  style={{color: navItemsColors[7]}}>{language.header2.navProfessional.navitem4.navitem4navitem1}</Link></li>
                              </ul>
                        </li>
                        <li className="submenu">
                            <Link to="/sectors" href="javascript:void(0);" onClick={()=>this.activate(8)}  style={{color: navItemsColors[8]}} className="show-submenu">{language.header2.navProfessional.navitem5.title}</Link>

                        </li>
                        <li className="submenu">
                            <Link to="/partners" href="javascript:void(0);" onClick={()=>this.activate(9)}  style={{color: navItemsColors[9]}} className="show-submenu">{language.header2.navProfessional.navitem6.title}<i className="icon-down-open-mini"></i></Link>
                            <ul>
                                <li onClick={()=>this.activate(9)} className="hand_cursor"><Link to="/partners"  style={{color: navItemsColors[9]}}>{language.header2.navProfessional.navitem6.navitem6navitem1}</Link></li>
                                <li onClick={()=>this.activate(9)} className="hand_cursor"><Link to="/partners"  style={{color: navItemsColors[9]}}>{language.header2.navProfessional.navitem6.navitem6navitem2}</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <Link to="/who_are_we_p" href="javascript:void(0);" onClick={()=>this.activate(10)}  style={{color: navItemsColors[10]}} className="show-submenu">{language.header2.navProfessional.navitem7.title}<i className="icon-down-open-mini"></i></Link>
                            <ul>
                                <li onClick={()=>this.activate(10)} className="hand_cursor"><Link to="/who_are_we_p"  style={{color: navItemsColors[10]}}>{language.header2.navProfessional.navitem7.navitem7navitem1}</Link></li>
                                <li onClick={()=>this.activate(10)} className="hand_cursor"><Link to="/who_are_we_p"  style={{color: navItemsColors[10]}}>{language.header2.navProfessional.navitem7.navitem7navitem2}</Link></li>
                                <li onClick={()=>this.activate(10)} className="hand_cursor"><Link to="/who_are_we_p"  style={{color: navItemsColors[10]}}>{language.header2.navProfessional.navitem7.navitem7navitem3}</Link></li>
                            </ul>
                        </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </div>
        {/* Second header*/}
    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} size="md" >
        {
            
         (code==true||code==-2)&&<><Modal.Header closeButton>
         <h5>{language.askingCode}</h5>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12  mt-4 mb-3">
                    <input onChange={({target:{value}})=>this.token=value} className="form-control"  placeholder={language.code}/>
                            {code==-2&&<div className="text-center">
                                    <span className=" text_secondary font-weight-bold">{language.codeError}</span>
                                </div>}
                          <button className="btn red inscription_btn ml-auto d-block mt-2 " onClick={()=>{this.props.startLoader();this.props.checkToken(this.login,this.token)}}>{language.ok}</button>
                    </div>
                </div>
            </div>
        </Modal.Body>
        </>}
        {code!=""&&code!=-1&&code!=true&&code!=-2&&<>
        <Modal.Header closeButton>
         <h5>{language.resetPassword}</h5>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12  mt-4 mb-3">
                    {this.props.code!=true&&<Password onChange={({target:{value}})=>this.password=value}  placeholder={language.header1.loginForm.input2}/>}
                            {this.props.status&&<div className="text-center">
                                    <span className=" text_secondary font-weight-bold">{language.resetSuccess}</span>
                                </div>}
                          <button className="btn red inscription_btn ml-auto d-block mt-2 " onClick={()=>{this.props.startLoader();this.props.resetPasswordStart(this.login,this.password)}}>{language.resetPassword}</button>
                    </div>
                </div>
            </div>
        </Modal.Body>{/* checking the code*/}
        </>}
        {(code==""||code==-1)&&<>
        <Modal.Header closeButton>
         <h5>{language.entermail}</h5>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12  mt-4 mb-3">
                         <input  onChange={({target:{value}})=>this.login=value} placeholder={language.header1.loginForm.input1} className="form-control"/>
                         {this.props.code==-1&&<p className="text-center"><span className="text-red font-italic">{language.requestError}</span></p>}
                         <button className="btn red inscription_btn ml-auto d-block mt-2 " onClick={()=>{this.props.startLoader();this.props.requestCodeStart(this.login)}}>{language.requestcode}</button>
                    </div>
                </div>
            </div>
        </Modal.Body>
            </>
        }
    </Modal>                  
</header>
  

}
}
const Header = connect((state)=>({userType:state.userType.type,status:state.resetPassword.status,code:state.resetPassword.code,logged: state.logIn.logged  ,logInError : state.logIn.logInError,authUser: state.logIn.authUser,photourl:state.profile.user.photourl}),{checkToken,startLogin,startLoader,startLogout,requestCodeStart,resetPasswordStart,particular,profession})(HeaderC)
export {Header}