import {useQuery} from '@apollo/client';
import React from 'react';
import {User} from '../entities/users';
import {GET_USERS} from '../queries/users';

function UsersTable() {
  const {data = {}, loading, error} = useQuery<{users?: User[]}>(GET_USERS)
  const {users = []} = data;

  return (
    <table className="table table-striped">
      <thead>
	<tr>
	  <th>Name</th>
	  <th>Age</th>
	  <th>Happy</th>
	  <th>Healthy</th>
	  <th>Busy</th>
	</tr>
      </thead>
      <tbody>
	{error && <tr>
	  <td colSpan={5}>Error getting information</td>
	</tr>}
	{loading && <tr>
	  <td colSpan={5}>Loading...</td>
	</tr>}
	{users.map(user => (
	  <tr key={user.id}>
	    <td>{user.name}</td>
	    <td>{user.age}</td>
	    <td>{user.happy ? 'Yes' : 'No'}</td>
	    <td>{user.healthy ? 'Yes' : 'No'}</td>
	    <td>{user.busy ? 'Yes' : 'No'}</td>
	  </tr>
	))}
      </tbody>
    </table>
  );
}

export default React.memo(UsersTable);

