
import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import Footer from './component/Footer'
import Header from './component/Header'
import Store from './pages/Store';
import Community from './pages/Community';




function App() {
  const history = useHistory()
  return (
    <div className="App">
      <BrowserRouter history={history}>

        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/mycart' component={MyCart} />
          <Route exact path='/store' component={Store} />
          <Route exact path='/community' component={Community} />
        </Switch>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
