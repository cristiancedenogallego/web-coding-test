import React from 'react';
import {KnownFilters} from '../entities/KnownFilter';

interface Props {
  filters: KnownFilters[];
}

function KnownFiltersInputs({filters}: Props) {
  return (
    <div>
      {filters.map((filter: KnownFilters) => (
	<div key={filter.id}>
	  <label>{filter.field_name}</label>
	  {filter.type == 'boolean' && (
	    <select>
	      <option value="">No filter</option>
	      <option value="1">true</option>
	      <option value="0">false</option>
	    </select>
	  )}
	  {filter.type === 'text' && (
	    <input type="text" />
	  )}
	  {filter.type === 'numeric' && (
	    <div>
	      <input type="number" />
	      <input type="number" />
	    </div>
	  )}
	</div>
      ))}
    </div>
)
}

export default React.memo(KnownFiltersInputs);

