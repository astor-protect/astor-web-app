import React, {Component} from 'react'
import signUpBackground from '../../../assets/imgs/cameraBackground.jpeg'
import {connect} from 'react-redux';
import {startLoader, stopLoader} from '../../../redux/actions/loader'
import {updatePhotoUrl} from '../../../redux/actions/profile'
import {startContactUs} from '../../../redux/actions/contactUs'
import {startSignup} from '../../../redux/actions/signup'
import profile from '../../../assets/imgs/profile.jpg'
import {Link} from 'react-router-dom'
import './Profil.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import { Confirmation } from '../../components'
import {deleteUser,changeAccountType} from '../../../redux/actions/admin'
import {startLogout} from '../../../redux/actions/logout'
import { withRouter } from 'react-router-dom'
import {ROLES1 as ROLES} from '../../../consts/app'
import { Dropdown } from 'react-bootstrap'

function buildFileSelector(f){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.addEventListener('change',f)
    return fileSelector;
  }

class Contact extends Component 
{
    state={
        profile,
        result:'',
        updatePP:false,
        displayConfirmation: false
    }
    componentDidMount(){
        this.fileSelector = buildFileSelector(this.onChange);
      }
      handleProfileSelect =()=> {
          this.fileSelector.click()
      }
      b64toBlob(dataURI) {

        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        const type = dataURI.match(/image\/[^;]+/);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type});
    }
     
        
      onChange = (e)=>{
          var fr=new FileReader()
          fr.readAsDataURL(e.target.files[0])
          const type = e.target.files[0].type
          // when image is loaded, set the src of the image where you want to display it
          fr.onload = (e)=>{ console.log(fr.result);this.setState({profile:fr.result,result:fr.result,updatePP:true}) };

          
      }
      uploadPP =  ()=>{
          this.props.startLoader();
        let formDataToSend = {
            requestName:'uploadImage',
            data:this.state.result                  
            }
            console.log(this.state.result)
            
              const urlToSend = "http://astorprotect.com/profils_images/api/entryPoint.php"
              const {email} = this.props.profile
              return fetch(urlToSend, {method:"post",body:  JSON.stringify(formDataToSend) }).then(
                async response => 
                {
                    this.props.stopLoader();
                    let data = await response.json()
                    const photourl = `http://astorprotect.com/profils_images/medias/images/original_image/${data.name}`
                    this.props.updatePhotoUrl(photourl)
                    this.props.startSignup({photoUrl:photourl,email},true)
                   return response
                }
            
             ).catch(
                error => {
                    stopLoader();
                    return {data:{},error:error}
                }
             )
      }
    render()
    {
       const {username,role,phoneNumber,lastName,firstNane,email} = this.props.profile
     const {context : {state : {contains : {default :language}}}} = this.props
    return  <main style={{backgroundColor:"grey",backgroundBlendMode:"multiply",backgroundImage : `url(${signUpBackground})`,backgroundPosition: "center",backgroundSize:"cover"}}>
     {this.state.displayConfirmation && <Confirmation id={email} confirmation={(email) => {this.props.deleteUser(email);this.props.startLogout();this.props.history.push('/')}} hideConfirmationModal={()=>this.setState({displayConfirmation:false})} />}
    <div className="container d-flex flex-row pl-sm-2 pl-1 pr-1 pr-sm-2 justify-content-center align-items-center" style={{height:"110vh"}}>
    <div className="rounded row border border-light shadow  pt-1 pl-1 pr-1 pb-1 pl-sm-2 pr-sm-2 bg-white" style={{width:"50rem"}}>
    <div className="col-md-10 m-auto align-self-center text-center pl-sm-5 pb-5 pr-sm-5 pl-3 pr-3 pt-5">
        
        <img src={this.state.profile} onClick={this.handleProfileSelect} width={200} className="img_update" height={200} style={{borderRadius: "50%",marginBottom: 10}} />
        {this.state.updatePP&&<div className="ml-3 hand" onClick={this.uploadPP} ><FontAwesomeIcon icon={faCheck} color="red" size="2x" /></div>}
        <div className="row justify-content-between">
           <div className="col-sm-6 text-right">
                <button className="btn" onClick={()=>this.setState({displayConfirmation:true})} style={{backgroundColor: 'red',padding:5,fontWeight:'bold',marginTop:5,marginBottom:10,color:'white'}}>Supprimer mon compte</button>
            </div>
            <div className="col-sm-6 text-left">
                <Dropdown drop='down' className="mr-3 text-dark mr-sm-0">
                            <Dropdown.Toggle as={({onClick}) => <button style={{backgroundColor: 'red',padding:5,fontWeight:'bold',marginTop:5,marginBottom:10,color:'white'}} className="btn" onClick={(e)=>onClick(e)}>Changer le type de compte</button>}>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {ROLES.map((v,i)=><>
                                <Dropdown.Item key={i.toString()} className="menu_item" onClick={()=>{this.props.startLoader();this.props.changeAccountType(v,-1,email)}}>
                                    <span >{v}</span>
                                </Dropdown.Item><Dropdown.Divider /></>)}
                            </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
          
        <div className="row justify-content-between">
            <div className="col-sm-5 " style={{boxShadow: '1px 0px 10px gray',borderRadius:16,padding: '10px 0 10px 0', marginBottom: 15}}>
            <span className="font-weight-bold">Noms </span><br/>
            {lastName}
            </div>
            <div className="col-sm-5" style={{boxShadow: '1px 0px 10px gray',borderRadius:16,padding: '10px 0 10px 0', marginBottom: 15}}>
            <span className="font-weight-bold">Prénoms</span><br/>
            {firstNane}
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-sm-5" style={{boxShadow: '1px 0px 10px gray',borderRadius:16,padding: '10px 0 10px 0', marginBottom: 15}}>
            <span className="font-weight-bold">Téléphone</span><br/>
            {phoneNumber}
            </div>
            <div className="col-sm-5" style={{boxShadow: '1px 0px 10px gray',borderRadius:16,padding: '10px 0 10px 0', marginBottom: 15}}>
            <span className="font-weight-bold">Role</span><br/>
            {role}
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-sm-5" style={{boxShadow: '1px 0px 10px gray',borderRadius:16,padding: '10px 0 10px 0'}}>
            <span className="font-weight-bold">Email</span><br/>{email}
            </div>
            <div className="col-sm-5" style={{boxShadow: '1px 0px 10px gray',borderRadius:16,padding: '10px 0 10px 0'}}>
            <span className="font-weight-bold">Identifiant</span><br/>
            {username}
            </div>
        </div>
        <div>
            <Link to="/update_profil" className="btn" style={{backgroundColor: 'red',padding:5,fontWeight:'bold',marginTop:10,color:'white'}}>Mettre a jour son profil</Link>
            <a href="http://51.77.223.171:8069/web/login" target="_blank" className="btn" style={{backgroundColor: 'red',padding:5,fontWeight:'bold',marginLeft:10,marginTop:10,color:'white'}}>Accéder a mon panel ERP</a>
        </div>
    </div>
</div>
</div>
</main>
}
}

const mapDispatchToProps = dispatch => {
    return {
        startLoader : ()=>dispatch(startLoader()),
        stopLoader: ()=>dispatch(stopLoader()),
        updatePhotoUrl: (e)=> dispatch(updatePhotoUrl(e)),
        startContactUs: (contact)=>dispatch(startContactUs(contact)),
        startSignup: (form,update)=>dispatch(startSignup(form,update)),
        deleteUser: (email)=> dispatch(deleteUser(email)),
        startLogout:()=>dispatch(startLogout()),
        changeAccountType: (v,id,email)=>dispatch(changeAccountType(v,id,email))
    }
}

const Profil = connect(state=>({profile:state.profile.user}), mapDispatchToProps)(withRouter(Contact))
export {Profil}