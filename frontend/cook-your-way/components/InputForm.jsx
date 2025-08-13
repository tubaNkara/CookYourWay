import React,{useState} from 'react'
import axios from 'axios'


export default function Inputform({setIsOpen}) {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isSignUp, setIsSignUp]=useState(false)
const [error,setError]=useState("")


const handleOnSubmit = async(e) => {
    e.preventDefault()
let endpoint=(isSignUp) ? "signup" : "login"
await axios.post(`http://localhost:5000/${endpoint}`,{email,password})
.then((res)=>{
    localStorage.setItem("token",res.data.token)
    localStorage.setItem("user",JSON.stringify(res.data.user))
    setIsOpen()
})
.catch(error => setError(error.response?.data?.message || "Something went wrong!"))

    console.log("email:", email)
    console.log("password:", password)
}


  return (
    
     <form action="" className="logform" onSubmit={handleOnSubmit}>
        <div className="logform-control">
            <label>Email </label>
            <input type="email" className='input' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required/>
        </div>
        <div className="logform-control">
            <label>Password </label>
            <input type="password" className='input'  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required/>
        </div>
        <button type="submit" >{(isSignUp) ? "Sign up" : "Log in"}</button> 
        { (error!="") && <h6 className="error">{error}</h6>}
        <p onClick={()=>setIsSignUp(pre=>!pre)}>{(isSignUp) ? "Already have an account" : "create new account"}</p>
        <br />
  
        </form> 
  
  )
}
