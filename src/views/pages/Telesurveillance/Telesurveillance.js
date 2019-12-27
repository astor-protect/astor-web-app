import React from 'react'
import telesurveillanceBackground from '../../../assets/imgs/cameraBackground.jpeg'
import telesurveillanceImg1 from '../../../assets/imgs/telesurveillanceImg1.jpeg'
import telesurveillanceImg2 from '../../../assets/imgs/telesurveillanceImg2.jpeg'
import telesurveillanceImg4 from '../../../assets/imgs/telesurveillanceImg3.jpeg'
import mobilePhone from '../../../assets/imgs/mobilePhone.jpeg'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileAlt,faCar,faClock} from '@fortawesome/free-solid-svg-icons'
  
export const Telesurveillance= ( {context : {state : {contains : {default :language}}}})=>
{
    
const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3" className="bg-danger text-center text-white">{language.telesurveillance.page1.popOver.title}</Popover.Title>
      <Popover.Content>
        {language.telesurveillance.page1.popOver.description}
      </Popover.Content>
    </Popover>
  );
return <main>

<div id="full-slider-wrapper">
        <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${telesurveillanceBackground})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
            <h3 className="container text-center text-white font_size_h3"  style={{textTransform: "uppercase", fontWeight:900}} >{language.telesurveillance.page1.title}</h3>	
            <div>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <div className="container text-center"><button className="button_intro button_width" >{language.telesurveillance.page1.button}</button> </div>
                </OverlayTrigger>
            </div>
        </div>
      
</div>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={telesurveillanceImg1} alt="" className="img-responsive mt-3"/>
        <h3>{language.telesurveillance.page2.column1.title}</h3>
          <p>    
          {language.telesurveillance.page2.column1.description}
          </p>
    </div>
    <div className="col-md-6">
      <img src={telesurveillanceImg4} alt="" className="img-responsive mt-3 w-100"/>
        <h3>{language.telesurveillance.page2.column4.title}</h3>
          <p>    
          {language.telesurveillance.page2.column4.description}
          </p>
    </div>
</div>
<div className="row">
    <div className="col-md-6">
      <img src={telesurveillanceImg2} alt="" className="img-responsive mt-3"/>
        <h3>{language.telesurveillance.page2.column2.title}</h3>
          <p>    
          {language.telesurveillance.page2.column2.description}
          </p>
    </div>
    <div className="col-md-6">
      <img src={telesurveillanceImg1} alt="" className="img-responsive mt-3"/>
        <h3>{language.telesurveillance.page2.column3.title}</h3>
          <p>    
          {language.telesurveillance.page2.column3.description}
          </p>
    </div>
</div>
</div>
<div className="container">
<hr/>
	<div className="row ">
		<div className="col-md-5">
			<div className="box_quote">
        <img src={mobilePhone} alt="" className="img-responsive"/>
			</div>
		</div>
		<div className="col-md-7">   
      <button style={{padding: "1rem", color: "white",backgroundColor: "red",border: "none"}}>{language.telesurveillance.page3.step1.title}</button>
      <p style={{padding: "1rem", backgroundColor: "#f3f3f3"}}>{language.telesurveillance.page3.step1.description}</p>
      <button style={{padding: "1rem", color: "white",backgroundColor: "red",border: "none"}}>{language.telesurveillance.page3.step3.title}</button>
      <p style={{padding: "1rem", backgroundColor: "#f3f3f3"}}>{language.telesurveillance.page3.step3.description}</p>
      <button style={{padding: "1rem", color: "white",backgroundColor: "red",border: "none"}}>{language.telesurveillance.page3.step2.title}</button>
      <p style={{padding: "1rem", backgroundColor: "#f3f3f3"}}>{language.telesurveillance.page3.step2.description}</p>
  
    </div>
</div>
<hr/>
</div>
    <div className="container">
		<div className="row" style={{backgroundColor: "#f3f3f3", padding:"1rem 0rem"}}>
			<div className="col-md-4">
        <div className="box_feat">
          <FontAwesomeIcon icon={faFileAlt} color="red" size="4x" />
          <p>{language.telesurveillance.page4[0]}</p>
        </div>
					</div>
					<div className="col-md-4">
						<div className="box_feat">
              <FontAwesomeIcon icon={faCar} color="red" size="4x" />
              <p>{language.telesurveillance.page4[1]}</p>
            </div>
					</div>
          <div className="col-md-4">
						<div className="box_feat">
              <FontAwesomeIcon icon={faClock} color="red" size="4x"/>
              <p>{language.telesurveillance.page4[2]}</p>
            </div>
					</div>
		</div>
    </div>         


</main>
}
