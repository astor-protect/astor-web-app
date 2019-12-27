
// to get item from the local storage
export const get = (key)=>{
    const item = localStorage.getItem(key)
    //console.log("Getting "+ key + " from the local storage", item)
    return item
}
// to set item to the local storage
export const set = (key,item)=>{
    localStorage.setItem(key,item)
    //console.log("setting "+ key + " to the local storage for the item ", item)
    
}

// to remove item to the local storage
export const remove = (key)=>{
    localStorage.removeItem(key)
    //console.log("Removing "+ key + " from the local storage")
    
}