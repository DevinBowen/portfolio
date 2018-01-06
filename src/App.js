import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        test
        <nav>
              <Link to='/' className=''>Home</Link>
          </nav>
        {routes}
      </div>
    );
  }
}

export default App;
