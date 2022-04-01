import type { ChangeEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../store/EchoStore';

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
