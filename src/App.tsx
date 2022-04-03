import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';
import UserInfo from './components/UserInfo';
// import UserInfoWithSuspense from './components/UserInfoWithSuspense';
import UserInfoWithoutSuspense from './components/UserInfoWithoutSuspense';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <hr />
      <TodoList />
      <hr />
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserInfo />
      </React.Suspense>
      <hr />
      {/* <UserInfoWithSuspense /> */}
      <UserInfoWithoutSuspense />
    </RecoilRoot>
  );
}

export default App;
