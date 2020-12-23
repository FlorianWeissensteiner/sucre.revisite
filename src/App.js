import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact';
import Gallery from './components/Gallery'

import NavigationBar from './components/NavigationBar'

function App() {


  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Gallery}/>
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
