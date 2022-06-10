const Redirect=(path='register')=>{
  const host=window.location.hostname
  const url=window.location.replace(`${host}/${path}#/${path}`)
  return url
}
export default Redirect;

 const RedirectExternal=(url)=>{
  const route=window.location.replace(url)
 return route
}
export {RedirectExternal}
