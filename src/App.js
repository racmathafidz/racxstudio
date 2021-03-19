import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import LandingPage from 'pages/LandingPage'

import 'assets/css/styles.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage}></Route>
    </Router>
  );
}

export default App;
