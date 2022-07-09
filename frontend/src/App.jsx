import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const User = lazy(() => import('./components/UserList'));
const Add = lazy(() => import('./components/AddUser'));
const Edit = lazy(() => import('./components/EditUser'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;