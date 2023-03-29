import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getAllUsers().then((data) => {
      console.log(data)
      setUsers(data);
    });
  }, []);

  const handleDelete = (id) => {
    UserService.deleteUser(id).then(() => {
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    });
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <Link to="/add-user" className="btn btn-primary">
        Add User
      </Link>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.name}>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <Link to={`/edit-user/${user._id}`} className="btn btn-sm btn-primary me-2">
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;