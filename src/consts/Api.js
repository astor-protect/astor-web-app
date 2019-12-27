export const API_HOST_NAME= "https://app-astor-protect-dev.herokuapp.com/"
export const API_END_POINT = {
    contactUs:{
        url: `api/v1/contact-us`,
        method: `post`
    },
    reset:{
        checkToken:{
            url:`api/v1/check-token`,
            method: `get`
        },
        checkEmail:{
            url: `api/v1/check-email`,
            method: `get`
        },
        requestCode:{
            url:`api/v1/request-reset-password`,
            method:`get`
        },
        resetPassword:{
            url: `api/v1/reset-password`,
            method:`post`
        }
    },
    login : {
        url : `oauth/token`,
        method: "post"
    },
    inscription : {
        url : `api/v1/inscription`,
        method: "post"
    },
    update:{
        url : `api/v1/update-account`,
        method: "post"
    },
    user : {
        url: 'api/v1/getUser',
        method: "get"
    },
    admin:{
        getUsers:{
            url:`api/v1/user/all/0/20`,
        },
        activate:{
            url: `api/v1/activation`
        },
        desactivate:{
            url:`api/v1/desactivation`
        },
        delete:{
            url:`api/v1/delete-account`
        },
        changeAccount:{
            url:`api/v1/change-account-type`
        }
    },
    root : {
        getUsers : {
         url : `supadmin/getAllUsers`,
         method: "get"
        },
        saveUser : 
        {
        url : `api/v1/inscription`,
        method: "post"
        },
        removeUser:{
            url : `supadmin/delete_user/`,
            method: "delete"
        }
    }
}