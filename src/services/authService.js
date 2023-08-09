export async function login(authDetails){
    const requestOption={
        method:"POST",
        headers: {"content-type":"application/json"},
        body : JSON.stringify(authDetails)
    }
    const response = await fetch("http://localhost:8000/login",requestOption)
    const data = await response.json()
    
      
    if(data.accessToken){
      sessionStorage.setItem("token",JSON.stringify(data.accessToken))
      sessionStorage.setItem("userID",JSON.stringify(data.user.id))
    }

    return data
}

export async function register(authDetails){
    const requestOption={
        method:"POST",
        headers: {"content-type":"application/json"},
        body : JSON.stringify(authDetails)
    }
    const response = await fetch("http://localhost:8000/register",requestOption)
    const data = await response.json()
    console.log(data)
    if(data.accessToken){
      sessionStorage.setItem("token",JSON.stringify(data.accessToken))
      sessionStorage.setItem("userID",JSON.stringify(data.user.id))
    }
    // return data
}