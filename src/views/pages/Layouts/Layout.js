import React from 'react';
import {Header} from '../../components'
import {VideoProtection} from '../../pages'
import {Home} from '../../pages'
import {Telesurveillance,Profil,UpdateProfil} from '../../pages'
import {Alarmes} from '../../pages'
import SignUp from '../SignUp/SignUp'
import {HowItWorks} from '../../pages'
import {Footer} from '../../components'
import {ContactUs} from '../../pages'
import {Route} from 'react-router-dom'
const pathName = window.location.pathname
const pathTables = ["/","/videoprotection","/telesurveillance","/alarms","/sign_up","/how_it_works","/contact_us","/who_are_we","/business","/sectors","/partners","/who_are_we_p"]
export const Layout = ({context})=><>
            {pathTables.includes(pathName)?
            <Header context={context}/>:<></>
            }
             <Route path="/" exact component={()=><Home context={context}/>}/>
             <Route path="/videoprotection" exact component={()=><VideoProtection context={context}/>}/>
             <Route path="/telesurveillance" exact component={()=><Telesurveillance context={context}/>}/>
             <Route path="/alarms" exact component={()=><Alarmes context={context}/>}/>
             <Route path="/sign_up" exact component={()=><SignUp context={context}/>}/>
             <Route path="/how_it_works" exact component={()=><HowItWorks context={context}/>}/>
             <Route path="/contact_us" exact component={()=><ContactUs context={context}/>} />
             <Route path="/profil" exact component={()=><Profil context={context}/>} />
             <Route path="/update_profil" exact component={()=><UpdateProfil context={context}/>} />
             {pathTables.includes(pathName)?
            <Footer context={context}/>:<></>
            }
            
    </>

