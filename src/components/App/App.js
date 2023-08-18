import Header from "../Header/Header";
import Diary from "../Diary/Dairy";
import Tips from "../Tips/Tips";
import NavBar from "../NavBar/NavBar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="content">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Diary />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
      </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
