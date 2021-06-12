import MainPage from './components/page/MainPage';
import BenefitPage from './components/page/BenefitPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/benefit" component={BenefitPage} />
			{/*<Route component={NotFound} />*/}
        </Switch>
    </Router>
  )
}

export default App
