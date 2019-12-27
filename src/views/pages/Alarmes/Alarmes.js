import React,{Component,useState} from 'react'
import alarmesBackground from '../../../assets/imgs/alarmesBackground.jpeg'
import Modal from 'react-bootstrap/Modal'
import alarmImg1 from '../../../assets/imgs/alarmImg1.jpeg'
import Carousel from 'react-bootstrap/Carousel'
import './Alarmes.css'
export class Alarmes extends Component
{
    state = {
        showModalButton1: false,
        showModalButton2 : false,
        index: 0,
        images: []
    }
      
    
    showModal = (name)=>
    {
        if(name==="home")
        this.setState({showModalButton1:true, showModalButton2:false})
        else
        this.setState({showModalButton1:false, showModalButton2:true})
    }
    handleClose = ()=>{
        
        this.setState({showModalButton1:false, showModalButton2:false})
    }
    componentDidMount(props)
    {
      const {context : {state : {contains : {default :language}}}} = this.props
      const img = [...this.state.images]
      language.alarms.page1.modals.modal1.description.map((v,i)=>{
      
        import(`../../${v.img}`).then(obj=>{
          img[i] = obj.default
          this.setState({images: img })
        }).catch(err=>console.log(err))
      
    })
    
    }
    increaseIndex = ()=>{
     const {context : {state : {contains : {default :language}}}} = this.props
      if(this.state.index <=language.alarms.page1.modals.modal1.description.length)
    {
      this.setState({index: ++this.state.index})
    }
    }
    
    render()
    {
     const {context : {state : {contains : {default :language}}}} = this.props
     const {index,images } = this.state
     return  <main>
        <Modal dialogClassName="top "  show={this.state.showModalButton1} onHide={this.handleClose}>
          <Carousel activeIndex={index} prevIcon={<></>} nextIcon={<></>} slide={false}>
            {language.alarms.page1.modals.modal1.description.map((v,i)=>
            <Carousel.Item>
              <div className="row no-gutters" style={{height: "280px", borderTop: "4px solid red"}}>
          
           <div className="col-6 p-0" style={{backgroundPosition: "center", backgroundImage: `url(${images[i]})`, backgroundSize:"cover"}}>

          </div>
          
          <div className="col-6 p-0 d-flex flex-column justify-content-between align-items-center">
            <h4 className="text-center m-auto pr-1 pl-1">
              {v.title}
            </h4>
            <div className="d-flex flex-row justify-content-between align-items-center w-100 p-3">
              <button className="button_intro" onClick={this.increaseIndex}>{language.no}</button>
            <button className="button_intro" onClick={this.increaseIndex}>{language.yes}</button>
            </div>
          </div>
        </div>
            </Carousel.Item>
            )}
          </Carousel>
        </Modal>
         <div id="full-slider-wrapper">
         <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${alarmesBackground})`,backgroundPosition: "center",height:"90vh",backgroundSize:"cover"}}>
            <h3 className="container text-center text-white font_size_h3" style={{textTransform: "uppercase", fontWeight:900}} >{language.alarms.page1.title}</h3>	
            <div className="container text-center">
              <button className="button_intro mr-sm-2 mb-2" onClick={()=>this.showModal("home")} style={{width:"15rem"}}>{language.alarms.page1.button1}</button> 
              <button style={{width:"15rem"}} onClick={()=>this.showModal("apartment")} className="button_intro">{language.alarms.page1.button2}</button>
            </div>
         </div>
    
      
</div>

<div className="container">
<hr/>
	<div className="row ">
		<div className="col-md-5">
			<div className="box_quote">
        <img src={alarmImg1} alt="" className="img-responsive"/>
			</div>
		</div>
		<div className="col-md-7 d-flex flex-column  align-items-center">   
      <div>
        <h4 style={{color: "red"}}>{language.alarms.page2.title}</h4>
        <p>{language.alarms.page2.description}</p>
        <h4 style={{color: "red"}}>{language.alarms.page2.title1}</h4>
        <div class="box_quote">
          <ul>
                <li><i class="icon_check_alt2"></i>{language.alarms.page2.description1[0]}</li>
                <li><i class="icon_check_alt2"></i>{language.alarms.page2.description1[1]}</li>
                <li><i class="icon_check_alt2"></i>{language.alarms.page2.description1[2]}</li>
                <li><i class="icon_check_alt2"></i>{language.alarms.page2.description1[3]}</li>
          </ul>
        </div>
       </div>
    </div>
</div>
<hr/>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center" style={{borderBottomColor: "red"}}>{language.alarms.page3.table1.title} <span style={{color: "red",marginLeft:"1rem"}}>{language.alarms.page3.table1.price}</span></th>
                </tr>
              </thead>
              <tbody>
                  {language.alarms.page3.table1.items.map(v=><tr><td>{v}</td></tr>)}
              </tbody>

            </table>
    </div>
    <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center" style={{borderBottomColor: "red"}}>{language.alarms.page3.table2.title} <span style={{color: "red",marginLeft:"1rem"}}>{language.alarms.page3.table2.price}</span></th>
                </tr>
              </thead>
              <tbody>
                  {language.alarms.page3.table1.items.map(v=><tr><td>{v}</td></tr>)}
                  {language.alarms.page3.table2.items.map(v=><tr><td>{v}</td></tr>)}
              </tbody>

            </table>
    </div>
  </div>
</div>
</main>
    }
  }
