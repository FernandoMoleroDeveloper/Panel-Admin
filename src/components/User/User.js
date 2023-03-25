import './User.scss';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const API_URL = process.env.REACT_APP_API_URL;

const User = () => {
  // Estados

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className='user-table'>
      <h2>
        <FormattedMessage id='users:title' />
      </h2>
      <table className='content-table'>
        <thead>
          <tr className='content-table__row-head'>
            <td className='content-table__cell'>ID</td>
            <td className='content-table__cell'>
              <FormattedMessage id='users:name' />
            </td>
            <td className='content-table__cell'>
              <FormattedMessage id='users:username' />
            </td>
            <td className='content-table__cell'>
              <FormattedMessage id='users:email' />
            </td>
            <td className='content-table__cell'>
              <FormattedMessage id='users:website' />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr className='content-table__row' key={user.id}>
                <td className='content-table__cell'>{user.id}</td>
                <td className='content-table__cell'>{user.name}</td>
                <td className='content-table__cell'>{user.username}</td>
                <td className='content-table__cell'>{user.email}</td>
                <td className='content-table__cell'>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
