import { atom, selector } from 'recoil';
import axios from 'axios';
import { UserModel } from '../types';

export const currentUserIDState = atom({
  key: 'currentUserIDState',
  default: 1,
});

export const currentUserState = selector<UserModel>({
  key: 'currentUserState',
  get: async ({ get }) => {
    const userID = get(currentUserIDState);
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);

    return data;
  },
});
