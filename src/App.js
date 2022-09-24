
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Trending from './pages/Trending';
import MyCart from './pages/MyCart';
import Footer from './component/Footer'
import Header from './component/Header'



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/mycart' component={MyCart} />
          <Route exact path='/trending' component={Trending} />
        </Switch>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
