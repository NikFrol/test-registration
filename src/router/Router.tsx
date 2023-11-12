import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RegistrationPage } from '../pages/Registration/Registration';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={RegistrationPage} />
      </Routes>
    </Router>
  );
};

export default AppRouter;