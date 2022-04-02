import type { ChangeEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import { TodoItemType } from '../types';
import { todoListState } from '../store/TodoStore';

type TodoItemProps = {
  item: TodoItemType;
};

export default function TodoItem({ item }: TodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    const newList = replaceItemAtIndex<TodoItemType>(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion: ChangeEventHandler<HTMLInputElement> = () => {
    const newList = replaceItemAtIndex<TodoItemType>(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [
    ...arr.slice(0, index),
    newValue,
    ...arr.slice(index + 1),
  ];
}

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1),
  ];
}
