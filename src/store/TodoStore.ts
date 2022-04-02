import { atom, selector } from 'recoil';
import { TodoItemType, FilterOption } from '../types';

export const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom<FilterOption>({
  key: 'todoListFilterState',
  default: FilterOption.SHOW_ALL,
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FilterOption.SHOW_COMPLETED:
        return list.filter((item) => item.isComplete);
      case FilterOption.SHOW_UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
