import { useRecoilValue } from 'recoil';
import { todoListState } from '../store/TodoStore';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
