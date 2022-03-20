import {useQuery} from '@apollo/client';
import React, {useContext} from 'react';
import {User} from '../entities/users';
import {GET_USERS} from '../queries/users';
import {GET_FILTERS} from '../queries/knownFilters';
import {GlobalContext} from '../state/GlobalProvider';
import {KnownFilters} from '../entities/KnownFilter';

function UsersTable() {
  const { hiddenColumns, filters } = useContext(GlobalContext);
  const {data = {}, loading, error} = useQuery<{users?: User[]}>(GET_USERS, {
    variables: {
      age_min: filters.age_min,
      age_max: filters.age_max,
      happy: filters.happy,
      healthy: filters.healthy,
      busy: filters.busy,
      name: filters.name,
    },
  });
  const {users = []} = data;
  const {data: knownFilters = {}} = useQuery<{knownFilter?: KnownFilters[]}>(GET_FILTERS);
  const {knownFilter = []} = knownFilters;

  return (
    <div className="container">
      <table className="table table-striped">
	<thead>
	  <tr>
	    {knownFilter.map(filter => hiddenColumns.indexOf(filter.id) == -1 && (
	      <th key={filter.id}>{filter.field_name}</th>
	    ))} 
	  </tr>
	</thead>
	<tbody>
	  {error && <tr>
	    <td colSpan={5}>Error getting information</td>
	  </tr>}
	  {loading && <tr>
	    <td colSpan={5}>Loading...</td>
	  </tr>}
	  {users.length === 0 && <tr>
	    <td colSpan={5}>There are not results</td>
	  </tr>}
	  {users.map((user: any) => (
	    <tr key={user.id}>
	      {knownFilter.map(filter => hiddenColumns.indexOf(filter.id) == -1 && (
		<td
		  key={filter.id}
		>
		  {filter.type === 'boolean' ? 
		    (user[filter.field_name] ? 'Yes' : 'No') :
		    user[filter.field_name]}
		</td>
	      ))}
	    </tr>
	  ))}
	</tbody>
      </table>
    </div>
  );
}

export default React.memo(UsersTable);

