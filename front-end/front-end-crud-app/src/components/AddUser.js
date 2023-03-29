import React, { useState } from 'react';
import { Link, use } from 'react-router-dom';
import UserService from '../services/UserService';
const AddUser = () => {
  const [userInfo, setUserInfo] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedValue = {
      name: name,
      email: email,
      password: password
    };
    setUserInfo(userInfo => ({
      ...userInfo,
      ...updatedValue
    }));
    const user = userInfo ;
    UserService.createUser(user).then(() => {
      window.location.href = '/';
    });
  };

  return (
    <div className="container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary me-2">
          Save
        </button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddUser;
