import { useState } from "react"
import "./forms.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const[email,setEmail]=useState("");
    const[Username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[confirmpassword,setconfirmPassword]=useState("");
 
     // form submit Handler
 
     const FormSubmitHandler = (event) => {
         event.preventDefault();
 
         if (email.trim()===""){
             return toast.error("Email is required");
         }
         if (Username.trim()===""){
            return toast.error("Username is required");
        }
        if (password.trim()===""){
            return toast.error("Email is required");
        }
         if (password !== confirmpassword){
             return toast.error("password is required");
         }
         console.log({email,password ,Username,confirmpassword});
     } 
     return(<div className="form-wrapper">
          <ToastContainer theme="colored" />
         <form onSubmit={FormSubmitHandler} className="form">
             <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="email" />
             <input onChange={(e) => setUsername(e.target.value)} value={Username} type="text" placeholder="username" />
             <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
             <input onChange={(e) => setconfirmPassword(e.target.value)} value={confirmpassword} type="password" placeholder="ConfirmPassword" />
             <button className="form-btn">Login</button>
         </form>
     </div>
     );
}

export default Register;