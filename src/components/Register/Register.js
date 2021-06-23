import {useRef} from 'react'
import RegisterCSS from './Register.module.css';
import axios from 'axios';
// we need this hook to redirect to main page
import {useHistory} from 'react-router-dom'; // useful for redirecting user
function Login() {
    // useRef hook to keep track of input changes
     const username = useRef();
      const email = useRef();
      const password = useRef();
    //   const from = useRef();
    //   const city = useRef();
      const history = useHistory();

    let registerUser = async(e) => {
           e.preventDefault()
           // making a new user wih values from ref attribute
          let user = {
              username:username.current.value,
              email:email.current.value,
              password:password.current.value,
            //   from:from.current.value,
            //   city:city.current.value,
 
          }
          try {
                 const res =  await axios.post('/auth/register/',user)
                 // redirecting to main page
                 history.push('/login')
          }
          catch(e)
          {
              console.log(e);
          }
  
             
    }
    return (
        <div className={RegisterCSS.form_wrapper}>
         <h1>Login</h1>
          <div  className={RegisterCSS.main_header}>
          
          </div> 
            
         <form onSubmit={ (e)=> registerUser(e)}>
                   <h1>Register</h1>

         <input placeholder="Username" required ref={username}/>
         <input placeholder="Email" type="email" required ref={email}/>
          <input placeholder="Password" type="password"  required ref={password}/>
           {/* <input placeholder="From" ref={from}/>
            <input placeholder="City" ref={city}/> */}
         <button type="submit" className={RegisterCSS.btn}>Submit</button>
         </form>

        </div>
    )
}

export default Login
