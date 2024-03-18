import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice.js";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span> {count} </span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(3))}>+++</button>
      </div>
    </div>
  );
}
