import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice.js';
import { filterSelectors } from 'redux/filter';
import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterSelectors.getFilter);
  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input type="text" value={filterValue} onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
