import React, {Component} from 'react';
import HomeContainer from './HomeContainer'
import './App.css';


class App extends Component {
  render () {
    return( 
      <div >
        {
          <HomeContainer />
        }
      </div>
    );
    }
  }
export default App;
