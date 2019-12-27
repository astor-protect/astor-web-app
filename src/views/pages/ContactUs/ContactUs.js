import React, {Component} from 'react'
import signUpBackground from '../../../assets/imgs/cameraBackground.jpeg'
import {Color} from '../../../consts/Color'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram,faTwitter,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {startLoader} from '../../../redux/actions/loader'
import {startContactUs} from '../../../redux/actions/contactUs'

class Contact extends Component 
{

            from =  ""
            subject = ""
            message= ""
            username=""
        
    

    
    render()
    {
        const popover = (
            <Popover id="popover-basic">
              <Popover.Content>
                <strong>+237999999999</strong>
              </Popover.Content>
            </Popover>
          );
     const {context : {state : {contains : {default :language}}}} = this.props
    return  <main style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${signUpBackground})`,backgroundPosition: "center",backgroundSize:"cover"}}>
    <div className="container d-flex flex-row pl-sm-5 pl-1 pr-1 pr-sm-5 justify-content-center align-items-center" style={{height:"110vh"}}>
    <div className="rounded row border border-light shadow  pt-1 pl-1 pr-1 pb-1 pl-sm-2 pr-sm-2 bg-white" style={{width:"50rem"}}>
    <div className="col-md-5">
        <h1 className="mb-5 font-weight-bold" style={{color: Color.secondary_color,fontSize: "2rem"}}>{language.header2.title}</h1>
        <div className="mb-4" >{language.contactUs.column1[0]}</div>
        <div  className="mb-4 d-flex justify-content-center align-items-center">
            <button className="btn" style={{borderRadius: "50%",backgroundColor: "red"}}><FontAwesomeIcon icon={faFacebookF} color="white"/> </button>
            <button className="btn ml-3" style={{borderRadius: "50%",backgroundColor: "red"}}><FontAwesomeIcon icon={faTwitter} color="white"/> </button>
            <button className="btn ml-3" style={{borderRadius: "50%",backgroundColor: "red"}}><FontAwesomeIcon icon={faInstagram} color="white"/> </button>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <button className="btn ml-3" style={{borderRadius: "50%",backgroundColor: "red"}}><FontAwesomeIcon icon={faWhatsapp} color="white"/> </button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <button className="btn ml-3" style={{borderRadius: "50%",backgroundColor: "red"}}><FontAwesomeIcon icon={faPhone} color="white"/> </button>
            </OverlayTrigger>
        </div>
        <p className="font-small"><i>{language.contactUs.column1[1]}</i></p>


    </div>
    <div className="col-md-7  align-self-center text-right pl-sm-5 pb-5 pr-sm-5 pl-3 pr-3 pt-5">
        {this.props.status===true?<h6 className="mb-1 text-center" style={{color:Color.secondary_color}}>{language.contactUsSuccess}</h6>
        :this.props.status===false?<h6 className="mb-1 text-center" style={{color:Color.secondary_color}}>{language.contactUsError}</h6>:null
        }
        <input onChange={(e) => this.username=e.target.value} className="form-control mb-2" placeholder={language.contactUs.form.username}/>
        <input onChange={(e) => this.from=e.target.value} className="form-control mb-2" placeholder={language.contactUs.form.email}/>
        <input onChange={(e) => this.subject=e.target.value} className="form-control mb-2" placeholder={language.contactUs.form.subject}/>
        <textarea onChange={(e) => this.message=e.target.value} rows="5" className="form-control mb-2" placeholder={language.contactUs.form.content}></textarea>
        <button onClick={() => {this.props.startLoader();this.props.startContactUs({from:this.from,subject:this.subject,message:this.message,username:this.username})}} className="btn red">{language.contactUs.form.send}</button>
    </div>
</div>
<div></div>
</div>
</main>
}
}

const mapDispatchToProps = dispatch => {
    return {
        startLoader : ()=>dispatch(startLoader()),
        startContactUs: (contact)=>dispatch(startContactUs(contact))
    }
}

const ContactUs = connect(state=>({status:state.contactUs.status}), mapDispatchToProps)(Contact)
export {ContactUs};