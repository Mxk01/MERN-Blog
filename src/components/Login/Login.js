import {useRef} from 'react'
import axios from 'axios';
import LoginCSS from './Login.module.css'
import {useHistory} from 'react-router-dom';

function Login() {
 let email = useRef();
 let password = useRef()
 let history = useHistory()
 
 let loginUser = async(e)=>{
     e.preventDefault()

    let user = {
        email:email.current.value,
        password:password.current.value
    }

    try 
    {
         await axios.post('/auth/login/',user)
         history.push('/');
    }
    catch(e)
    {
        console.log(e);
    }
 }
    return (
       
             <div className={LoginCSS.form_wrapper}>
          
          <div  className={LoginCSS.main_header}>
        
          </div> 
             
         <form onSubmit={ (e)=> loginUser(e)}>
          <h1>Login</h1>
         <input placeholder="Email" required ref={email}/>
          <input placeholder="Password" type="password"  required ref={password}/>
   
         <button type="submit" className={LoginCSS.btn}>Submit</button>
         </form>

        </div>
    )
}

export default Login
