 import './App.css';
 import Main from './components/Main/Main'
 import Navbar from './components/Navbar/Navbar'
  import About from './components/About/About'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CreatePost from './components/CreatePost/CreatePost';
import Post from './components/Post/Post';
 import FadeIn from 'react-fade-in';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 function App() {
  return (
    <Router>
    <div className="App">
              <Navbar/>

        <Switch>
          <Route exact path="/">
           <FadeIn> 
          <Main/>
          </FadeIn>
         
          </Route>
          <Route path="/about">
                     <About/>

            </Route>

            <Route path="/register">
             <Register/> 
            </Route>

            <Route path="/login">
             <Login/> 
            </Route>
          
          <Route path="/createPost">
             <CreatePost/> 
            </Route>

             <Route path="/posts/id">
             <CreatePost/> 
            </Route>
        </Switch>
     
     </div>
     </Router>
  );
}

export default App;