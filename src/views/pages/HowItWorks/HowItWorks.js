import React,{Component} from 'react'
import alarmesBackground from '../../../assets/imgs/alarmesBackground.jpeg'
import Modal from 'react-bootstrap/Modal'

export class HowItWorks extends Component
{
    state = {
        showModalButton1: false,
        showModalButton2:false
    }
    showModal = ()=>
    {
        
        this.setState({showModalButton1:true})
    }
    handleClose = ()=>{
        
        this.setState({showModalButton1:false, showModalButton2:true})
    }
    handleClose1 = ()=>{
        this.setState({showModalButton1:false, showModalButton2: false})
    }

    render()
    {
     const {context : {state : {contains : {default :language}}}} = this.props
     return  <main>
        <Modal show={this.state.showModalButton1} onHide={this.handleClose}>
        <Modal.Header>
            <Modal.Title>{language.howItWorks.page1.form.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="col-12 font-weight-bold">{language.howItWorks.page1.form.homeTypeLabel}</div>
            </div>
            <div className="row">
                    <div className="col-12 text-center">
                        <label htmlFor="homeType1"  className="mr-1">{language.howItWorks.page1.form.homeType1} </label>
                        <input type="checkbox" id="homeType1" className="mr-1"/>
                        <label htmlFor="homeType2"  className="mr-1">{language.howItWorks.page1.form.homeType2} </label>
                        <input type="checkbox" id="homeType2"/>
                    </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="col-12 font-weight-bold">{language.howItWorks.page1.form.detectionLabel}</div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <label htmlFor="detection1"  className="mr-1">{language.howItWorks.page1.form.detection1} </label>
                    <input type="radio" id="detection1" className="mr-1"/>
                    <label htmlFor="detection2"  className="mr-1">{language.howItWorks.page1.form.detection2} </label>
                    <input type="radio" id="detection2"/>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="col-12 font-weight-bold">{language.howItWorks.page1.form.internetLabel}</div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <label htmlFor="internet1"  className="mr-1">{language.yes}</label>
                    <input type="radio" id="internet1" className="mr-1"/>
                    <label htmlFor="internet2"  className="mr-1">{language.no} </label>
                    <input type="radio" id="internet2"/>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="col-12 font-weight-bold">{language.howItWorks.page1.form.residenceLabel}</div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <label htmlFor="residence1"  className="mr-1">{language.howItWorks.page1.form.residence1}</label>
                    <input type="radio" id="residence1" className="mr-1"/>
                    <label htmlFor="residence2"  className="mr-1">{language.howItWorks.page1.form.residence2} </label>
                    <input type="radio" id="residence2"/>
                    <label htmlFor="residence3"  className="mr-1">{language.howItWorks.page1.form.residence3} </label>
                    <input type="radio" id="residence3"/>
                </div> 
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="col-12 font-weight-bold">{language.howItWorks.page1.form.intervenantLabel}</div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                    <label htmlFor="intervenant1"  className="mr-1">{language.yes}</label>
                    <input type="radio" id="intervenant1" className="mr-1"/>
                    <label htmlFor="intervenant2"  className="mr-1">{language.no} </label>
                    <input type="radio" id="intervenant2"/>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="col-12 font-weight-bold">{language.howItWorks.page1.form.cameraLabel}</div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                    <label htmlFor="camera1"  className="mr-1">{language.yes}</label>
                    <input type="radio" id="internet1" className="mr-1"/>
                    <label htmlFor="camera2"  className="mr-1">{language.no} </label>
                    <input type="radio" id="camera2"/>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={this.handleClose1}>
            {language.cancelButton}
          </button>
          <button className="btn btn-success" onClick={this.handleClose}>
            {language.submitButton}
          </button>
        </Modal.Footer>
      </Modal>
        <Modal show={this.state.showModalButton2} onHide={this.handleClose1}>
            <Modal.Header>
                <Modal.Title>{language.howItWorks.page1.form2.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input class="form-control mb-2" placeholder={language.signUp.form.name}/>
                <input class="form-control mb-2" placeholder={language.signUp.form.email}/>
                <input class="form-control mb-2" placeholder={language.howItWorks.page1.form2.telephone}/>
                <input class="form-control mb-2" placeholder={language.howItWorks.page1.form2.sexe}/>
                <label htmlFor="sexe1"  className="mr-1">{language.howItWorks.page1.form2.sexe1}</label>
                <input type="radio" id="sexe1" className="mr-1"/>
                <label htmlFor="sexe2"  className="mr-1">{language.howItWorks.page1.form2.sexe2}</label>
                <input type="radio" id="sexe2"/>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={this.handleClose1}>
                 {language.cancelButton}
                </button>
                <button className="btn btn-success" onClick={this.handleClose1}>
                {language.submitButton}
                </button>
            </Modal.Footer>
        </Modal> 
         <div id="full-slider-wrapper">
         <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${alarmesBackground})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
            <h3 className="font_size_h3"  style={{ textAlign: "center" ,color: "#fff", textTransform: "uppercase", fontWeight:900}} >{language.howItWorks.page1.title}</h3>	
            <div className="container text-center"><button className="button_intro ml-3 button_width" onClick={this.showModal}>{language.howItWorks.page1.form.title}</button> </div>
         </div>   
        </div>
</main>
    }
}
