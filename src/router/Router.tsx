import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RegistrationPage } from '../pages/Registration/Registration';
import { UserDataPage } from '../pages/Registration/UserData/UserData';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={RegistrationPage} />
        <Route path="/users/:id" Component={UserDataPage} />
      </Routes>
    </Router>
  );
};

export default AppRouter;