import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { UserModel } from '../types';
import { currentUserIDState } from '../store/UserStore';

export default function UserInfoWithoutSuspense() {
  const [userID, setUserID] = useRecoilState(currentUserIDState);
  const [userObject, setUserObject] = useState<UserModel>();

  const fetchRandomUser = () => {
    const newUserID = Math.floor(Math.random() * 10) + 1;

    setUserID(newUserID);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);

      setUserObject(data);
    })();
  }, [userID]);

  return (
    <div>
      <button onClick={fetchRandomUser}>Fetch Random User</button>
      {userObject && (
        <>
          <div>Current User ID: {userID}</div>
          <div>Current User Name: {userObject.name}</div>
        </>
      )}
    </div>
  );
}
