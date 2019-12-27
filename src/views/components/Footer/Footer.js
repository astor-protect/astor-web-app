import React from 'react'
import {Link} from 'react-router-dom'
export const Footer = ({context})=>
{
    const {state : {contains : {default :language}}} = context
 return <footer>
<div className="container">
    <div className="row ">
        <div className="col-md-2">
            <h3>{language.footer.column2.title}</h3>
            <ul>
            {language.footer.column2.description.map((v,i)=><li key={i}><Link to="">{v}</Link></li>)}
            </ul>
        </div>
        <div className="col-md-2">
            <h3>{language.footer.column1.title}</h3>
            <ul>
            {language.footer.column1.description.map((v,i)=><li key={i}><Link to="">{v}</Link></li>)}
            </ul>
        </div>

    <div className="col-md-2">
            <h3>{language.footer.column3.title}</h3>
            <ul>
            {language.footer.column3.description.map((v,i)=><li key={i}><Link to="">{v}</Link></li>)}
            </ul>
    </div>
    <div className="col-md-2">
            <h3>{language.footer.column4.title}</h3>
            <ul>
            {language.footer.column4.description.map((v,i)=><li key={i}><Link to="">{v}</Link></li>)}
            </ul>
        </div>
        <div className="col-md-2">
            <h3>{language.footer.column5.title}</h3>
            <ul>
            {language.footer.column5.description.map((v,i)=><li key={i}><Link to="">{v}</Link></li>)}
            </ul>
        </div>
        <div className="col-md-2">
            <h3>{language.footer.column6.title}</h3>
            <ul>
            {language.footer.column6.description.map((v,i)=><li key={i}><Link to="">{v}</Link></li>)}
            </ul>
        </div>
        </div>

</div>
<div id="copy">
    <div className="container">
        © Astor 2019 - All rights reserved.
    </div>
</div>
</footer> 
}