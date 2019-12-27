import React, {Component}  from 'react'
import {Layout} from './views/pages'
import {MyProvider,MyContext} from './context'
import {Route,  HashRouter as Router,Switch} from 'react-router-dom'
import {DashboardLayout} from './views/pages'
import {get} from './helpers/localStorage'
import {ProfileLayout, ClientAreaLayout, ExternalAccountLayout} from './views/pages';
import {post} from './helpers/http'
import {set} from './helpers/localStorage'
import {API_END_POINT} from './consts/Api'

class App extends Component
{
  async componentDidMount()
  {
    try
    {
     const response = await post(API_END_POINT.login.url,{client_id: "hYG2htJE",grant_type:"password",username: "astorprotectweb@astor.cm",password:"79yLNNTVsL"})
     const data = await response.json()
     set("astor_token",data.access_token)
    }
    catch(error)
    {
     console.log(error)
    
    }
  }
  render()
  {
  return <Router>
    <MyProvider>
      <MyContext.Consumer>
      {(context)=>
        <Switch>
          <Route path="/dashboard" component={()=><DashboardLayout context={context} role={get("right")}/>} />
          <Route path="/profile" exact component={() => <ProfileLayout context={context} />} />
          <Route path="/my-space" component={() => <ClientAreaLayout context={context} />} />
          <Route path="/resaller" component={() => <ExternalAccountLayout context={context} />} />
          <Route path='/' component={()=><Layout context={context} />}/>
        </Switch>
      }
      </MyContext.Consumer>
    </MyProvider>
  </Router>
}
}
export default App;
