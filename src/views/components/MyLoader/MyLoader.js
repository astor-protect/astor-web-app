import React from 'react'
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux'

let MyLoader = ({loader})=>
{
    
    return loader?<div style={{zIndex: "10000",position : "fixed",top: "0",backgroundColor:"black",opacity: "0.7",height:"100vh",width:"100vw"}} className="d-flex flex-column justify-content-center align-items-center">
<Loader type="ThreeDots" color="red" height={100} width={100}  />
</div>:null

}
const mapStateToProps = (state)=>({loader: state.loader.loader})
const mapDispatchToProps = {}
 MyLoader = connect(mapStateToProps,mapDispatchToProps)(MyLoader)
 export {MyLoader}