import React, {useContext} from 'react';
import {KnownFilters} from '../entities/KnownFilter';
import {GlobalContext} from '../state/GlobalProvider';

interface Props {
  filters: KnownFilters[];
}

function KnownFiltersPickFields({filters}: Props) {
  const {toggleColumn, hiddenColumns} = useContext(GlobalContext);
  return (
  <div className="row mb-3">
    {filters.map(filter => (
      <div key={filter.id} className="col-12 col-md-3">
	<div className="form-check form-switch">
	  <input onChange={() => toggleColumn(filter.id)} className="form-check-input" type="checkbox" checked={hiddenColumns.indexOf(filter.id) === -1} id="flexSwitchCheckDefault" />
	  <label className="form-check-label text-capitalize" htmlFor="flexSwitchCheckDefault">{filter.field_name}</label>
	</div>
      </div>
    ))}
  </div>
  );
}

export default React.memo(KnownFiltersPickFields);

