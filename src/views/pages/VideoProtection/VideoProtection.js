import React,{Component} from 'react'
import videoProtectionBackground from '../../../assets/imgs/videoProtectionBackground.jpg'
import videoProtectionBackground2 from '../../../assets/imgs/videoProtectionBackground2.jpg'
import shield from '../../../assets/imgs/shield.svg'
import videoCamera from '../../../assets/imgs/video-camera.svg'
import { connect } from 'react-redux'
import {PARTICULAR} from '../../../redux/actions/userType'
import {Color} from '../../../consts/Color'
import policeman from '../../../assets/icons/policeman.png'
import computer from '../../../assets/icons/website.png'
import videoSurveillance from '../../../assets/icons/video-surveillance.png'
import {ImgD} from '../../../views/components/ImgD/ImgD'
import background1 from '../../../assets/imgs/background1.jpeg'
import computer1 from '../../../assets/icons/computer1.png'
import connectedAlarm from '../../../assets/icons/connectedAlarm.png'
import folder from '../../../assets/icons/folder.png'
import interphone from '../../../assets/icons/interphone.png'
import policeman1 from '../../../assets/icons/policeman1.png'
import remoteAccess from '../../../assets/icons/remote-access.png'
import remoteControl from '../../../assets/icons/remote-control.png'
import shake from '../../../assets/icons/shake.png'
import video from '../../../assets/icons/video.png'
import notification from '../../../assets/icons/notification.png'
import smokeDetector from '../../../assets/icons/smoke-detector.png'
import alarm from '../../../assets/icons/alarm.png'

const table1Imgs = [connectedAlarm,smokeDetector,remoteAccess,shake,alarm,remoteControl,video,policeman1,computer1,interphone,alarm,notification,notification,notification]
class  VideoProtection1 extends Component{
    
    render()
    {

    const  {context : {state : {contains : {default :language}}}} = this.props
    const {type} = this.props
return <main><div id="full-slider-wrapper">
        <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${type==PARTICULAR?videoProtectionBackground:background1})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
            <h3 className="container text-center text-white font_size_h3" style={{ textTransform: "uppercase", fontWeight:900}} >{type==PARTICULAR?language.videoprotection.main.slider1.title:language.videoprotectionP.main.slider1.title}</h3>	
            {type==PARTICULAR?null:<p className="text-white p-sm-5 p-1 text-center" style={{fontSize:'1.1rem'}}>{language.videoprotectionP.main.slider1.description}</p>}
        </div>
      
</div>
{type==PARTICULAR?<>
{/*pack thaad */}
<div className="container margin_60_35">
               	<div className="row">
                   <div className="col-md-4 col-sm-4 hovering_pack">
                        <table className="table">
                                <thead>
                                    <tr>
                                        <th className="text-center"  style={{backgroundColor: Color.secondary_color,color:"white"}}>{language.videoprotection.main.page2.column3.title} <span style={{marginLeft:"1rem"}}>{language.videoprotection.main.page2.column1.price}</span></th>
                                    </tr>
                                    <tr className="d-flex flex-row justify-content-center m-auto">
                                        <ImgD src={videoSurveillance}/>
                                        <ImgD src={computer} />
                                        <ImgD src={policeman} withPlus={false}/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {language.videoprotection.main.page2.column3.description.map((v,i)=><tr key={i.toString()}><td><img src={table1Imgs[i]} className="icon" alt=""/> {v}</td></tr>)}
                                    </tbody>

                             </table>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                        <button className="btn btn-outline-danger mb-1 button_white" >{language.videoprotection.main.page2.column1.button1}</button>
                                        <button className="btn btn-outline-danger button_white">{language.videoprotection.main.page2.column1.button2}</button>
                            </div>
                        </div>
                    <div className="col-md-4 col-sm-4 hovering_pack">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="text-center"  style={{backgroundColor: Color.secondary_color,color:"white"}}>{language.videoprotection.main.page2.column2.title} <span style={{marginLeft:"1rem"}}>{language.videoprotection.main.page2.column1.price}</span></th>
                                    </tr>
                                    <tr className="d-flex flex-row justify-content-center m-auto">
                                        <ImgD src={videoSurveillance}/>
                                        <ImgD src={policeman} withPlus={false}/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {language.videoprotection.main.page2.column2.description.map((v,i)=><tr key={i.toString()}><td><img src={table1Imgs[i]} className="icon" alt=""/> {v}</td></tr>)}
                                    </tbody>
                             </table>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                        <button className="btn btn-outline-danger mb-1 button_white" >{language.videoprotection.main.page2.column1.button1}</button>
                                        <button className="btn btn-outline-danger button_white" >{language.videoprotection.main.page2.column1.button2}</button>
                                </div>
                        </div>
                    <div className="col-md-4 col-sm-4 hovering_pack">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-center"  style={{backgroundColor: Color.secondary_color,color:"white"}}>{language.videoprotection.main.page2.column1.title} <span style={{marginLeft:"1rem"}}>{language.videoprotection.main.page2.column1.price}</span></th>
                                </tr>
                                <tr className="d-flex flex-row justify-content-center m-auto">
                                    <ImgD src={videoSurveillance}/>
                                    <ImgD src={computer} withPlus={false}/>
                                </tr>
                            </thead>
                            <tbody>
                                {language.videoprotection.main.page2.column1.description.map((v,i)=><tr key={i.toString()}><td><img src={table1Imgs[i]} className="icon" alt=""/> {v}</td></tr>)}
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </tbody>
                        </table>
                        	
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                        <button className="btn btn-outline-danger mb-1 button_white" >{language.videoprotection.main.page2.column1.button1}</button>
                                        <button className="btn btn-outline-danger button_white">{language.videoprotection.main.page2.column1.button2}</button>
                                </div>
                        </div>   
                </div> 
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${videoProtectionBackground2})`,backgroundPosition: "center",height:"100vh",backgroundSize:"cover"}}>
                <h3 className="mt-5" style={{ fontSize: "40px", textAlign: "center" ,color: "#fff", textTransform: "uppercase", fontWeight:900}} >{language.videoprotection.main.page3.title}</h3>
                    <div className="row text-white mt-5 width_hundred">
                                <div className="col-md-4">
                                    <ul className="list_ok">
                                            
                                          {language.videoprotection.main.page3.column1.description.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list_ok"> 
                                          {language.videoprotection.main.page3.column2.description.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list_ok"> 
                                          {language.videoprotection.main.page3.column3.description.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
                            </div>    
                            <div className="row text-white mt-5 width_hundred">
                                <div className="col-md-4">
                                    <ul className="list_ok">
                                            
                                          {language.videoprotection.main.page3.column4.description.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list_ok"> 
                                          {language.videoprotection.main.page3.column5.description.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list_ok"> 
                                          {language.videoprotection.main.page3.column6.description.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
                            </div>    
                </div>
{/*pack thaad */}
	<div class="container margin_60_25">
		<div class="row">
			<div class="col-md-6">
                <div class="box_feat">
                    <span><img src={shield} alt=""/></span>
                        <h3>{language.videoprotection.main.page4.column1.title}</h3>
                        <p>{language.videoprotection.main.page4.column1.description}</p>
                        </div>
					</div>
					<div class="col-md-6">
						<div class="box_feat">
                            <span><img src={videoCamera} alt="" /></span>
                            <h3>{language.videoprotection.main.page4.column2.title}</h3>
                            <p>{language.videoprotection.main.page4.column2.description}</p>
                        </div>
					</div>
		</div>
    </div>         
</>:<>
<div className="container margin_60_35">
    <div className="row">
        <div className="col-md-4  card_professionnal_vid">
            <p className="red_background">{language.videoprotectionP.page2.column1.title}</p>
            <p>{language.videoprotectionP.page2.column1.description}</p>
        </div>
        <div className="col-md-4  card_professionnal_vid">
            <p className="red_background">{language.videoprotectionP.page2.column2.title}</p>
            <p>{language.videoprotectionP.page2.column2.description}</p>
        </div>
        <div className="col-md-4  card_professionnal_vid">
            <p className="red_background">{language.videoprotectionP.page2.column3.title}</p>
            <p>{language.videoprotectionP.page2.column3.description}</p>
        </div>  
    </div>
    <hr/>
    <div className="row">
        <div className="col-md-4  card_professionnal_vid">
            <p className="red_background">{language.videoprotectionP.page3.column1.title}</p>
            <p>{language.videoprotectionP.page3.column1.description}<br/><br/><br/></p>
        </div>
        <div className="col-md-4  card_professionnal_vid">
            <p className="red_background">{language.videoprotectionP.page3.column2.title}</p>
            <p>{language.videoprotectionP.page3.column2.description}</p>
        </div>
        <div className="col-md-4  card_professionnal_vid">
            <p className="red_background">{language.videoprotectionP.page3.column3.title}</p>
            <p>{language.videoprotectionP.page3.column3.description}</p>
        </div>  
    </div>
</div>
</>}

</main>
    }
}
export const VideoProtection = connect((state)=>({type:state.userType.type}),{})(VideoProtection1)