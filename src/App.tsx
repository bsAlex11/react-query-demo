import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Favorites from "./components/favorites/Favorites";
import MovieSearch from "./components/movieSearch/MovieSearch";

function App() {
  return (
    <>
      <Switch>
        <Route path="/favorites" component={Favorites} exact/>
        <Route path="/" component={MovieSearch} exact/>
      </Switch>
      <ToastContainer />
    </>  
  );
}

export default App;
