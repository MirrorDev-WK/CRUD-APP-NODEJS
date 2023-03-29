import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrudNavbar from './components/CrudNavbar';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
// import AddBook from './components/AddBook';
// import EditBook from './components/EditBook';

function App() {
  return (
    <>
    <CrudNavbar />
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<UserList/>} />
      <Route path="/add-user" element={<AddUser/>} />
    </Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
