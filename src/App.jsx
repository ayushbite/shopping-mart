import Home from './pages/Home'
import About from "./pages/About";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App()
{
    return(
       <>
       <BrowserRouter>
           <Link to={"/"}>Home</Link>
           <Link to={"/about"}>About</Link>
           <Switch>

               <Route path="/" component={Home} exact={"/"} ></Route>
           <Route path="/about" component={About}></Route>
           </Switch>
       </BrowserRouter>
       </>
    );
}
export default App;