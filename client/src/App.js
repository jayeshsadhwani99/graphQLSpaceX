import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Route exact path='/'>
            <Launches />
          </Route>
          <Route exact path='/launch/:id' component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
