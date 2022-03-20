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
    return <p></p>;
  }

  return <div className="container">
    <h3 className="mt-5 mb-3">Filter data</h3>
    <KnownFiltersInputs
      filters={knownFilter}
    /> 
    <h3 className="mt-3 mb-3">Users - Pick Columns</h3>
    <KnownFiltersPickFields
      filters={knownFilter}
    />
  </div>;
}

export default React.memo(KnownFilters);
