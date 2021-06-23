import React from 'react'
import  NavbarCSS from './Navbar.module.css';
import {Link} from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PostAddIcon from '@material-ui/icons/PostAdd';
function Navbar() {
    return (
        <div>
            <nav>
               <li>
                               <Link to="/" style={{textDecoration:'none',color:'white'}}><HomeIcon/></Link>

               </li> 

                <li>
                <Link to="/about" style={{textDecoration:'none',color:'white'}}>
                
                 
                 <li>
                 <InfoIcon/>
                <span>About</span>
                </li>
                </Link>
                </li>
                <Link to="/login" style={{textDecoration:'none',color:'white'}}>
                
               
                <li>
                 <LockOpenIcon/>
                <span>Login</span>
                </li>
                
                </Link>
                  <Link to="/register" style={{textDecoration:'none',color:'white'}}>
                
                <li>
                <VpnKeyIcon/>
                <span>Register</span>
                </li>
                </Link>

                <Link style={{textDecoration:'none',color:'white'}} to="/createPost"> 
                 <li>
                 <PostAddIcon/>
                <span>Create post</span>
                </li>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
