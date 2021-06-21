import MainPage from './components/page/MainPage';
import BenefitPage from './components/page/BenefitPage';
import HotelPage from './components/page/HotelPage';
import TmoPage from './components/page/TmoPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/benefit" component={BenefitPage} />
		  <Route exact path="/hotel" component={HotelPage} /> 
		  <Route exact path="/tmo" component={TmoPage} /> 
			{/*<Route component={NotFound} />*/}
        </Switch>
    </Router>
  )
}

export default App
