// /helpers/http.js
import {API_HOST_NAME} from '../consts/Api'
import {get as getLocalStorage} from '../helpers/localStorage'
// for api get request, using it : get(url,handleSuccess,handleError)
export const get = (url,method="get")=>{
    console.log("API REQUEST[GET] URL: ",url)
    let promise
     promise = fetch(`${API_HOST_NAME}${url}`, {method,headers:{'Authorization': "BEARER " + getLocalStorage("astor_token")}})
     return promise.then(
       response => 
       {
          // console.log("API REQUEST[GET] SUCCESS[RESPONSE]",response )
          return response
       }
   
    ).catch(
       error => {
           // console.log("API REQUEST[GET] ERROR[REQUEST]: ", error)
           return {data:{},error:error}
       }
    )
}



// for api post request, using it : post(url,data,handleSuccess,handleError)
export const post= (url,data,contentType='application/x-www-form-urlencoded',authorization=`Basic ${btoa("hYG2htJE:Q9XKpFpn9TV27D4G")}`)=>{
   
 return fetch(`${API_HOST_NAME}${url}`, {method:"post",body: contentType==="application/json"? JSON.stringify(data) : Object.keys(data).map(key => key + '=' + data[key]).join('&'),headers:{'Content-Type':contentType,'Authorization': authorization}}).then(
    response => 
    {
      //  console.log("API REQUEST[POST] SUCCESS[RESPONSE]",response )
       return response
    }

 ).catch(
    error => {
        //console.log("API REQUEST[POST] ERROR[REQUEST]: ", error)
        return {data:{},error:error}
    }
 )
}
