import React from 'react';
import styles from './app.module.css';
import { Button, Input } from './common';

function App() {
  return (
    <div className={styles.app}>
      <Input label='Name'/>
      <Button text='Start the Course' />
    </div>
  );
}

export default App;
