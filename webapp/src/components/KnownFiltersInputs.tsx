import React, {useContext} from 'react';
import {KnownFilters} from '../entities/KnownFilter';
import {GlobalContext} from '../state/GlobalProvider';

interface Props {
  filters: KnownFilters[];
}

function KnownFiltersInputs({filters}: Props) {
  const {setFilter} = useContext(GlobalContext)
  const handleChange = React.useCallback((name: string, type: string) => (ev: any) => {
    if (ev.target.value === '') {
	setFilter(name, null);
	return;
    }
    if (type === 'numeric') {
      setFilter(name, parseInt(ev.target.value));
      return;
    }
    if (type === 'boolean') {
      setFilter(name, ev.target.value === '1');
      return;
    }
    setFilter(name, ev.target.value)
  }, []);

  return (
    <div className="row">
      {filters.map((filter: KnownFilters) => (
	<div key={filter.id} className="col-12 col-md-6 mb-3">
	  {filter.type !== 'numeric' && <label className="form-label text-capitalize">{filter.field_name}</label>}
	  {filter.type == 'boolean' && (
	    <select onChange={handleChange(filter.field_name, filter.type)} className="form-control">
	      <option value="">No filter</option>
	      <option value="1">Yes</option>
	      <option value="0">No</option>
	    </select>
	  )}
	  {filter.type === 'text' && (
	    <input onChange={handleChange(filter.field_name, filter.type)} type="text" className="form-control" />
	  )}
	  {filter.type === 'numeric' && (
	    <div className="row">
	      <div className="col col-md-6">
		<label htmlFor="customRange1" className="form-label">Min {filter.field_name}:</label>
		<input
		  type="number"
		  onChange={handleChange(`${filter.field_name}_min`, filter.type)}
		  className="form-control"
		/>
	      </div>
	      <div className="col-12 col-md-6">
		<label htmlFor="customRange1" className="form-label">Max {filter.field_name}:</label>
		<input type="number" onChange={handleChange(`${filter.field_name}_max`, filter.type)} className="form-control" />
	      </div>
	    </div>
	    
	  )}
	</div>
      ))}
    </div>
)
}

export default React.memo(KnownFiltersInputs);

