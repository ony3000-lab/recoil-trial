import type { ChangeEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import { FilterOption } from '../types';
import { todoListFilterState } from '../store/TodoStore';

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
    setFilter(value as FilterOption);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={FilterOption.SHOW_ALL}>All</option>
        <option value={FilterOption.SHOW_COMPLETED}>Completed</option>
        <option value={FilterOption.SHOW_UNCOMPLETED}>Uncompleted</option>
      </select>
    </>
  );
}
