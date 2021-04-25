import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from './componentes/Navbar/Navbar.jsx';
import ItemContainer from './componentes/Body/ItemContainer/ItemContainer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/login';
import Contact from './componentes/Contact/Contact';
import Category from './componentes/Categories/Category';
import CartBuy from './componentes/CartWidget/CartBuy';
import Electronics from './componentes/Categories/electronics/Electronics';
import MenClothing from './componentes/Categories/menclothing/MenClothing';
import WomenClothing from './componentes/Categories/womenclothing/WomenClothing';
import Jewerely from './componentes/Categories/jewelery/Jewelery';


const App = () => {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
        <Route path='/category' component={Category}/>
        <Route path='/electronics' component={Electronics}/>
        <Route path='/jewelery' component={Jewerely}/>
        <Route path='/mensclothing' component={MenClothing}/>
        <Route path='/womensclothing' component={WomenClothing}/>
        <Route path='/hotShopping' component={ItemContainer}/>
        <Route path='/cartBuy' component={CartBuy}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/signIn' component={Login}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
