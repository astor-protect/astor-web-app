import React,{Component} from 'react'
import background1 from '../../../assets/imgs/background1.jpeg'
import background2 from '../../../assets/imgs/background2.jpg'
import background3 from '../../../assets/imgs/background3.jpg'
import './Home.css'
/* icons importation */
import alarm3 from '../../../assets/icons/alarm3.png'
import computer from '../../../assets/icons/website.png'
import computer1 from '../../../assets/icons/computer1.png'
import fireAlarm from '../../../assets/icons/fire-alarm.png'
import policeman from '../../../assets/icons/policeman.png'
import alarm from '../../../assets/icons/alarm.png'
import alarm2 from '../../../assets/icons/alarm2.png'
import connectedAlarm from '../../../assets/icons/connectedAlarm.png'
import folder from '../../../assets/icons/folder.png'
import home from '../../../assets/icons/home-automation.png'
import house from '../../../assets/icons/house.png'
import interphone from '../../../assets/icons/interphone.png'
import motionSensor from '../../../assets/icons/motion-sensor.png'
import policeArresting from '../../../assets/icons/police-arresting-man.png'
import policeCar from '../../../assets/icons/police-car.png'
import policeman1 from '../../../assets/icons/policeman1.png'
import remoteAccess from '../../../assets/icons/remote-access.png'
import remoteControl from '../../../assets/icons/remote-control.png'
import shake from '../../../assets/icons/shake.png'
import smokeDetector from '../../../assets/icons/smoke-detector.png'
import telephone from '../../../assets/icons/telephone.png'
import quality from '../../../assets/icons/quality.png'
import contactUs from '../../../assets/imgs/contactUs.png'
import telesurveillanceMan from '../../../assets/imgs/telesurveilanceMan.jpg' 

/* icons importation */
import {Color} from '../../../consts/Color'
import {ImgD} from '../../../views/components/ImgD/ImgD'

import videoProtectionBackground2 from '../../../assets/imgs/videoProtectionBackground2.jpg'
import videoProtection from '../../../assets/imgs/videoProtection.png'
import time from '../../../assets/imgs/time.png'
import client from '../../../assets/imgs/client.png'
import competence from '../../../assets/imgs/competence.png'
import vision from '../../../assets/imgs/vision.png'
import {PARTICULAR} from '../../../redux/actions/userType'
import Carousel from 'react-bootstrap/Carousel'
import { connect } from 'react-redux'
const table1Imgs = [connectedAlarm,remoteControl,remoteAccess,shake,telephone,remoteControl,policeman1,folder,computer1,interphone,alarm2,house,quality,house]
const table2Imgs = [connectedAlarm,remoteControl,remoteAccess,shake,telephone,remoteControl,policeman1,folder,computer1,policeArresting,interphone,alarm2,home,motionSensor,alarm,smokeDetector,alarm,house,remoteControl,remoteControl]
const table3Imgs = [connectedAlarm,remoteControl,remoteAccess,shake,telephone,remoteControl,policeman1,folder,computer1,policeArresting,policeCar,interphone,alarm2,home,motionSensor,alarm,smokeDetector,quality,alarm,house,remoteControl,remoteControl]

 class Home1 extends Component
{


render()
{ 
  const  {context : {state : {contains : {default :language}}}} = this.props
  const {type} = this.props
  return <main>
{/* sliders */}
<div id="full-slider-wrapper">
    <Carousel controls={false}>
        <Carousel.Item>
            {type==PARTICULAR?<div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${background1})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
                <h3  className="font_size_h3 home_h3 text-center" >{language.main.slider1.title}</h3>	
                <p className="text-white p-sm-5 p-1 text-center" style={{fontSize:'1.1rem'}}>{language.main.slider1.item1}<br/>{language.main.slider1.item2}</p>
                
            </div>:<div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${background1})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
                <h3  className="font_size_h3 home_h3 text-center" >{language.mainP.slider1.title}</h3>
                <p className="text-white p-sm-5 p-1 text-center" style={{fontSize:'1.1rem'}}>{language.mainP.slider1.description}</p>
            </div>}
        </Carousel.Item>
        <Carousel.Item>
        {type==PARTICULAR?<div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${background3})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
                <h3 className="font_size_h3 home_h3 text-center" >{language.main.slider2.title}</h3>	
            </div>
            :
            <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${background1})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
                <h3  className="font_size_h3 home_h3 text-center" >{language.mainP.slider2.title}</h3>	
                <p className="text-white p-sm-5 p-1 text-center" style={{fontSize:'1.1rem'}}>{language.mainP.slider2.description}</p>
            </div>

            }
        </Carousel.Item>
        <Carousel.Item>
        {type==PARTICULAR?<div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${background2})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
                <h3 className="font_size_h3 home_h3 text-center" >{language.main.slider3.title}</h3>	
            </div>:
            <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${background1})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
            <h3  className="font_size_h3 home_h3 text-center" >{language.mainP.slider3.title}</h3>	
            <p className="text-white p-sm-5 p-1 text-center" style={{fontSize:'1.1rem'}}>{language.mainP.slider3.description}</p>
        </div>
          }
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${telesurveillanceMan})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
            <h3  className="font_size_h3 home_h3 text-center" >{language.mainP.page1.column2.title}</h3>	
        </div>
          
        </Carousel.Item>
    </Carousel>
</div>
{/* sliders */}


<div className="container margin_60_35">
    <div className="row">

				<div className="col-sm-4">
        {type==PARTICULAR?<><h3 style={{color : Color.secondary_color}}>{language.main.page2.column2.title}</h3>
					<p>
                    {language.main.page2.column2.description}
					</p></>:
          <><h3 style={{color : Color.secondary_color}}>{language.mainP.page1.column1.title}</h3>
					<p>
                    {language.mainP.page1.column1.description}
					</p></>}
				</div>
                <div className="col-sm-4">
                {type==PARTICULAR?<><h3 style={{color : Color.secondary_color}}>{language.main.page2.column1.title}</h3>
					<p>
                    {language.main.page2.column1.description}
					</p></>:<><h3 style={{color : Color.secondary_color}}>{language.mainP.page1.column2.title}</h3>
					<p>
                    {language.mainP.page1.column2.description}
					</p></>}
				</div>
				<div className="col-sm-4">
        {type==PARTICULAR?<><h3 style={{color : Color.secondary_color}}>{language.main.page2.column3.title}</h3>
					<p>
                    {language.main.page2.column3.description}
					</p></>:<><h3 style={{color : Color.secondary_color}}>{language.mainP.page1.column3.title}</h3>
					<p>
                    {language.mainP.page1.column3.description}
					</p></>}
				</div>				
	</div>
</div>

{type==PARTICULAR?null:<div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${videoProtectionBackground2})`,backgroundPosition: "center",backgroundSize:"cover"}}>
    <h3 className="mt-5" style={{ fontSize: "30px", textAlign: "center" ,color: "#fff", textTransform: "uppercase", fontWeight:900}} >{type==PARTICULAR?language.main.page3.introduction.title:language.mainP.page2.introduction.title}</h3>
    <div className="container">
        <h5 className="text-red">{type==PARTICULAR?language.main.page3.introduction.description[0].title:language.mainP.page2.introduction.description.title}</h5>
        <p className="text-white">{type==PARTICULAR?language.main.page3.introduction.description[0].item:language.mainP.page2.introduction.description.item}</p>
        {type==PARTICULAR?<>
        <h5 className="text-red">{language.main.page3.introduction.description[1].title}</h5>
        <p className="text-white">{language.main.page3.introduction.description[1].item}</p>
        </>:<div className="row">
          <div className="col-12 col-sm-2 text-center">
            <div style={{borderRadius:'50%',backgroundColor:'white',height:150,width:150,padding:20}}>
              <img src={contactUs} style={{maxWidth:'100%'}}/>
            </div>
            <p className="text-white">{language.mainP.page2.items[0]}</p>
          </div>
          <div className="col-12 col-sm-2 text-center">
            <div style={{borderRadius:'50%',backgroundPosition:'center',height:150,width:150,padding:20,backgroundColor:'white'}}>
            <img src={videoProtection} style={{maxWidth:'100%'}}/>
            </div>
            <p className="text-white">{language.mainP.page2.items[1]}</p>
          </div>
          <div className="col-12 col-sm-2 text-center">
            <div style={{borderRadius:'50%',backgroundPosition:'center',height:150,width:150,padding:20,backgroundColor:'white'}}>
            <img src={time} style={{maxWidth:'100%'}}/>
            </div>
            <p className="text-white">{language.mainP.page2.items[2]}</p>
          </div>
          <div className="col-12 col-sm-2 text-center">
            <div style={{borderRadius:'50%',backgroundPosition:'center',height:150,width:150,padding:20,backgroundColor:'white'}}>
              <img src={client} style={{maxWidth:'100%'}}/>
            </div>
            <p className="text-white">{language.mainP.page2.items[3]}</p>
          </div>
          <div className="col-12 col-sm-2 text-center">
            <div style={{borderRadius:'50%',backgroundPosition:'center',height:150,width:150,padding:20,backgroundColor:'white'}}>
              <img src={competence} style={{maxWidth:'100%'}}/>
            </div>
            <p className="text-white">{language.mainP.page2.items[4]}</p>
          </div>
          <div className="col-12 col-sm-2 text-center">
            <div style={{borderRadius:'50%',backgroundPosition:'center',height:150,width:150,padding:20,backgroundColor:'white'}}>
            <img src={vision} style={{maxWidth:'100%'}}/>
            </div>
            <p className="text-white">{language.mainP.page2.items[5]}</p>
          </div>

        </div>}
    </div>
</div>}


{/* offres  pour les professionnels olama */}
{type==PARTICULAR?null:<div className="container margin_60_35">
    <div className="row">
    <div className="col-md-4 col-12 hovering_pack">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center"  style={{backgroundColor: Color.secondary_color,color:"white"}}>{language.main.page3.table3.title} <span style={{marginLeft:"1rem"}}>{language.main.page3.table3.price}</span></th>
                </tr>
                <tr className="d-flex flex-row justify-content-center m-auto">
                  <ImgD src={alarm3}/>
                  <ImgD src={computer}/>
                  <ImgD src={policeman}/>
                  <ImgD src={fireAlarm} withPlus={false}/>
                </tr>
              </thead>
              <tbody>
              {language.main.page3.table3.items.map((v,i)=><tr key={i.toString()}><td><img src={table3Imgs[i]} className="icon" alt=""/> {v}</td></tr>)}
               </tbody>

            </table>
    </div>

    <div className="col-md-4 col-12 hovering_pack" style={{backgroundColor: "white"}}>
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center"  style={{backgroundColor: Color.secondary_color,color:"white"}}>{language.main.page3.table2.title} <span style={{marginLeft:"1rem"}}>{language.main.page3.table2.price}</span></th>
                </tr>
                <tr className="d-flex flex-row justify-content-center m-auto">
                  <ImgD src={alarm3}/>
                  <ImgD src={computer}/>
                  <ImgD src={policeman}/>
                  <ImgD src={fireAlarm} withPlus={false}/>
                </tr>
              </thead>
              <tbody>
              {language.main.page3.table2.items.map((v,i)=><tr key={i}><td><img src={table2Imgs[i]} className="icon"  alt=""/> {v}</td></tr>)}
              </tbody>

            </table>
    </div>
    <div className="col-md-4 col-12 hovering_pack">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center" style={{backgroundColor: Color.secondary_color,color:"white"}}>{language.main.page3.table1.title} <span style={{marginLeft:"1rem"}}>{language.main.page3.table1.price}</span></th>
                </tr>
                <tr className="d-flex flex-row justify-content-center m-auto">
                  <ImgD src={alarm3}/>
                  <ImgD src={computer}/>
                  <ImgD src={policeman}/>
                  <ImgD src={fireAlarm} withPlus={false}/>
                </tr>
              </thead>
              <tbody>
                  {language.main.page3.table1.items.map((v,i)=><tr key={i}><td><img src={table1Imgs[i]} className="icon" alt=""/> {v}</td></tr>)}
              </tbody>

            </table>
    </div>
    
  </div>
</div>}
{/* offres  pour les professionnels olama */}
{type==PARTICULAR?null:<div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${videoProtectionBackground2})`,backgroundPosition: "center",backgroundSize:"cover"}}>
     <h3 className="mt-5" style={{ fontSize: "30px", textAlign: "center" ,color: "#fff", textTransform: "uppercase", fontWeight:900}} >{language.main.page4.introduction.title}</h3>
     <div className="container">
        <p className="text-white">{language.main.page4.introduction.description}</p>
    </div>
 </div>}
 {/* offre hyksos */}
{type==PARTICULAR?null:<div className="container margin_60_35">
    <div className="row">
    <div className="col-md-6 col-12 hovering_pack">
    <table className="table">
              <thead>
                <tr>
                  <th className="text-center" style={{borderBottomColor: "red"}}>{language.main.page4.table2.title} <span style={{color: "red",marginLeft:"1rem"}}>{language.main.page4.table2.price}</span></th>
                </tr>
              </thead>
              <tbody>
                  {language.main.page4.table2.items.map(v=><tr><td>{v}</td></tr>)}
              </tbody>

            </table>
    </div>
    <div className="col-md-6 col-12 hovering_pack">
    <table className="table">
              <thead>
                <tr>
                  <th className="text-center" style={{borderBottomColor: "red"}}>{language.main.page4.table3.title} <span style={{color: "red",marginLeft:"1rem"}}>{language.main.page4.table2.price}</span></th>
                </tr>
              </thead>
              <tbody>
                  {language.main.page4.table3.items.map(v=><tr><td>{v}</td></tr>)}
              </tbody>

            </table>
    </div>
</div>
</div>}
{/* offre hyksos */}
<div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",height:"fit-content",backgroundBlendMode:"multiply",backgroundImage : `url(${videoProtectionBackground2})`,backgroundPosition: "center",backgroundSize:"cover"}}>
     <h3 className="mt-5" style={{ fontSize: "30px", textAlign: "center" ,color: "#fff", textTransform: "uppercase", fontWeight:900}} >{language.main.page5.introduction.title}</h3>
     <div className="container">
        <p className="text-white">{language.main.page5.introduction.description}</p>
        <div className="row text-white width_hundred">
                                <div className="col-md-4 col-12">
                                    <ul className="list_ok">
                                            {language.main.page5.column1.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
                                <div className="col-md-4 col-12">
                                    <ul className="list_ok"> 
                                    {language.main.page5.column2.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
                                <div className="col-md-4 col-12">
                                    <ul className="list_ok"> 
                                    {language.main.page5.column2.map(v=><li>{v}</li>)}
                                    </ul>
                                </div>
        </div>    
                  
    </div>
 </div>
{/*offre vision 360*/}
<div className="container margin_60_35">
    <div className="row">
    <div className="col-md-6 col-12 hovering_pack">
    <table className="table">
              <thead>
                <tr>
                  <th className="text-center"  style={{backgroundColor: Color.secondary_color,color:"white"}}>{language.main.page5.table2.title} <span style={{color: "white",marginLeft:"1rem"}}>{language.main.page5.table2.price}</span></th>
                </tr>
              </thead>
              <tbody>
                  {language.main.page5.table2.items.map((v,i)=><tr  key={i.toString()}><td><img src={table3Imgs[i]} className="icon" alt=""/> {v}</td></tr>)}
              </tbody>

            </table>
    </div>
    <div className="col-md-6 col-12 hovering_pack">
    <table className="table">
              <thead>
                <tr>
                <th className="text-center"  style={{backgroundColor: Color.secondary_color,color:"white"}}>{language.main.page5.table3.title} <span style={{color: "white",marginLeft:"1rem"}}>{language.main.page5.table2.price}</span></th>
                </tr>
              </thead>
              <tbody>
                  {language.main.page5.table3.items.map((v,i)=><tr  key={i.toString()}><td><img src={table3Imgs[i]} className="icon" alt=""/> {v}</td></tr>)}
              </tbody>

            </table>
    </div>
</div>
</div>}
{/*offre vision 360*/}


</main>
}
}
export const Home = connect((state)=>({type:state.userType.type}),{})(Home1)