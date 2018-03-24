import React from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import Home from "./Home";
import Battle from "./Battle";
import TimePicker from "./DatePicker";
import ModalExample from "./ModalLess";
import Form2 from "./Form2";
import BuiltModal from "./BuiltModal";
import NoStateDrawer from "./NoStateDrawer";
import DrawerP from "./DrawerP";
import StateDrawer from "./StateDrawer";
import StateModal from "./StateModal";
import Map6 from "./map-app/Map6";
import Map2 from "./map-app/Map2";
import Map3 from "./map-app/Map3";
import Map4 from "./map-app/Map4";
import Map5 from "./map-comp/Map5";

const App = () => (
  <BrowserRouter>
    <div>
      <ul className = "nav">
        <li><NavLink exact activeClassName='active' to="/">Menu</NavLink></li>
        <li><NavLink activeClassName='active' to="/battle">CardImage</NavLink></li>
  {/*         <li><NavLink activeClassName='active' to="/topics">DatePicker</NavLink></li>
          <li><NavLink activeClassName='active' to="/form">ModalLess</NavLink></li>
          <li><NavLink activeClassName='active' to="/form2">Form2</NavLink></li>
          <li><NavLink activeClassName='active' to="/builtmodal">BuiltModal</NavLink></li>
          <li><NavLink activeClassName='active' to="/form4">NoStateDrawer</NavLink></li>
          <li><NavLink activeClassName='active' to="/statedrawer">StateDrawer</NavLink></li>
          <li><NavLink activeClassName='active' to="/form5">StateModal</NavLink></li>
          <li><NavLink activeClassName='active' to="/drawerP">DrawerP</NavLink></li> */}
        <li><NavLink activeClassName='active' to="/map">Map6</NavLink></li>
        <li><NavLink activeClassName='active' to="/map2">Map2</NavLink></li>
        <li><NavLink activeClassName='active' to="/map3">Map3</NavLink></li>
        <li><NavLink activeClassName='active' to="/map4">Map4</NavLink></li>   
        <li><NavLink activeClassName='active' to="/map5">MapComp</NavLink></li>   
      </ul>

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/battle" component={Battle}/>
      <Route path="/topics" component={TimePicker}/>
      <Route path="/form" component={ModalExample}/>
      <Route path="/form2" component={Form2}/>
      <Route path="/builtmodal" component={BuiltModal}/>
      <Route path="/form4" component={NoStateDrawer}/>
      <Route path="/statedrawer" component={StateDrawer}/>
      <Route path="/form5" component={StateModal}/>
      <Route path="/drawerP" component={DrawerP}/>
      <Route path="/map" component={Map6}/>
      <Route path="/map2" component={Map2} />
      <Route path="/map3" component={Map3} />
      <Route path="/map4" component={Map4}/>  
      <Route path="/map5" component={Map5}/>  
      <Route render={() => (
        <h3>404-Not Found</h3>)}/>
      </Switch>
    </div>
    </BrowserRouter>
)

module.exports = App;//common JS
//export default App;