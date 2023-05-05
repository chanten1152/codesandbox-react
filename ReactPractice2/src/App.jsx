import { useState, useCallback, useMemo } from "react";
import { ChidlArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (event) => setText(event.target.value);
  const onCLickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);
  
  // const temp = useMemo(() =>  1+3, [])
  // const onClickCountUp = () => {
  //   setCount(count + 1);
  // };
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onCLickOpen}>表示</button>
      <ChidlArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
