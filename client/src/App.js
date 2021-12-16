import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Write from "./pages/write/Write";


function App() {
  const currentUser = true;
  return (
    <Router>
        <TopBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/register">
                {currentUser ? <Home /> : <Register />}
            </Route>
            <Route path="/login">
                {currentUser ? <Home /> : <Login />}
            </Route>
            <Route path="/settings">
                {currentUser ? <Settings /> : <Home />}
            </Route>
            <Route path="/write">
                {currentUser? <Write /> : <Home />}
            </Route>
            <Route path="/post/:postId">
                <Single />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
