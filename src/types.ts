export type TodoItemType = {
  id: number;
  text: string;
  isComplete: boolean;
};

export enum FilterOption {
  SHOW_ALL = 'Show All',
  SHOW_COMPLETED = 'Show Completed',
  SHOW_UNCOMPLETED = 'Show Uncompleted',
};

export type UserModel = {
  id: number;
  name: string;
}
