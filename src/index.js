import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Button from './components/Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello hello={'Hello, world! And the people of the world!'} />
        <Button />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
