import React from 'react';
import styles from './app.module.css';
import { Button } from './common';

function App() {
  return (
    <div className={styles.app}>
      <Button text='hello world' />
    </div>
  );
}

export default App;
