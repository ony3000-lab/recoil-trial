import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserIDState, currentUserState } from '../store/UserStore';

export default function UserInfoWithSuspense() {
  const [userID, setUserID] = useRecoilState(currentUserIDState);
  const userObject = useRecoilValue(currentUserState);

  const fetchRandomUser = () => {
    const newUserID = Math.floor(Math.random() * 10) + 1;

    setUserID(newUserID);
  };

  return (
    // 이 형태로는 사용할 수 없음
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>
        <button onClick={fetchRandomUser}>Fetch Random User</button>
        <div>Current User ID: {userID}</div>
        <div>Current User Name: {userObject.name}</div>
      </div>
    </React.Suspense>
  );
}
