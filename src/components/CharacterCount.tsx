import { useRecoilValue } from 'recoil';
import { charCountState } from '../store/EchoStore';

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
