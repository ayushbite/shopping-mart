import Home from './pages/Home'
import About from "./pages/About";
import Navigation from './components/Navigation';
import Products from './pages/Products';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Cart from './pages/Cart';

function App()
{
    return(
       <>
       <BrowserRouter>
           <Navigation/>
           <Switch>

               <Route path="/" component={Home} exact={"/"} ></Route>
           <Route path="/about" component={About}></Route>
           <Route path="/products" component={Products}></Route>
           <Route path="/cart" component={Cart}></Route>
           </Switch>
       </BrowserRouter>
       </>
    );
}
export default App;