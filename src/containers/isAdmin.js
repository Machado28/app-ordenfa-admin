
const user={
    role:{
       description:"admin"
    }
}
function IsAdmin (user={ role:{
    description:"admin5"
 }}){
  if(user.role.description==="admin")
  return true

  return false
}
export {IsAdmin}


