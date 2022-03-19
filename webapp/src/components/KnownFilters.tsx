import {useQuery} from '@apollo/client';
import * as React from 'react';
import {KnownFilters} from '../entities/KnownFilter';
import {GET_FILTERS} from '../queries/knownFilters';
import KnownFiltersInputs from './KnownFiltersInputs';
import KnownFiltersPickFields from './KnownFiltersPickFields';


function KnownFilters() {
  const { loading, error, data = {} } = useQuery<{ knownFilter?: KnownFilters[] }>(GET_FILTERS);
  const { knownFilter = [] } = data;

  if (error) {
    return <p>Error :(</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return <div>
    <KnownFiltersInputs
      filters={knownFilter}
    /> 
    <KnownFiltersPickFields
      filters={knownFilter}
    />
  </div>;
}

export default React.memo(KnownFilters);
