/* Libs */
import React from "react";
import { Switch, Route } from "react-router-dom";

/* Components */
import Navbar from "./Components/navbar/navbar";
// Views
import Home from "./Components/views/home";
import Articles from "./Components/views/articles";
import Services from "./Components/views/services";
import About from "./Components/views/about";
import Contacts from "./Components/views/contacts";
import Formcontact from "./Components/views/formcontact";

/* Styles(css) */
import "./styles/navbar.css";
import "./styles/viewsyles.css";
import "./styles/formcontact.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page=1" component={Articles} />
          <Route path="/page=2" component={Services} />
          <Route path="/page=3" component={About} />
          <Route path="/page=4" component={Contacts} />
          <Route path="/page=5" component={Formcontact} />
        </Switch>
      </main>
    </div>
  );
}
