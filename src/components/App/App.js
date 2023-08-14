import Header from "../Header/Header";
import Diary from "../Diary/Dairy";
import Tips from "../Tips/Tips";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Diary />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
