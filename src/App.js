
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './component/Home';
import Footer from './component/Footer'
import Header from './component/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
