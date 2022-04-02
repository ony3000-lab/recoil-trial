import { atom } from 'recoil';
import { TodoItemType } from '../types';

export const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: [],
});
