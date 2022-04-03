import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserIDState, currentUserState } from '../store/UserStore';

export default function UserInfo() {
  const [userID, setUserID] = useRecoilState(currentUserIDState);
  const userObject = useRecoilValue(currentUserState);

  const fetchRandomUser = () => {
    const newUserID = Math.floor(Math.random() * 10) + 1;

    setUserID(newUserID);
  };

  return (
    <div>
      <button onClick={fetchRandomUser}>Fetch Random User</button>
      <div>Current User ID: {userID}</div>
      <div>Current User Name: {userObject.name}</div>
    </div>
  );
}
