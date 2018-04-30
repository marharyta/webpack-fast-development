import React from 'react';
import Hello from './Hello';
import Button from './components/Button';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello hello={'hello world! And the people of the world!'} />
        <Button />
      </div>
    );
  }
}
