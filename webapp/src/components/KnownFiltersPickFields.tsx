import React from 'react';
import {KnownFilters} from '../entities/KnownFilter';

interface Props {
  filters: KnownFilters[];
}

function KnownFiltersPickFields({filters}: Props) {
  return (
  <div>
    {filters.map(filter => (
      <div key={filter.id}>
	<label>{filter.field_name}</label>
	<input type="checkbox" />
      </div>
    ))}
  </div>
  );
}

export default React.memo(KnownFiltersPickFields);

