import { useDispatch, useSelector } from "react-redux";
import { addBug, deleteBug, toggleBug } from "./bugsSlice";
import { useEffect, useRef } from "react";

export default function Bugs() {
  const bugs = useSelector((state) => state.bugs);
  console.log(bugs);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(bugs);
  }, [bugs]);

  useEffect(() => {
    dispatch(addBug("Bug 1"));
    dispatch(addBug("Bug 2"));
    dispatch(addBug("Bug 3"));
  }, []);

  const bugDescriptionRef = useRef(null);
  const handleButtonClick = () => {
    const bugDesc = bugDescriptionRef.current.value;
    dispatch(addBug(bugDesc));
    bugDescriptionRef.current.value = null;
  };

  return (
    <>
      <div>
        <div>
          <input type="text" ref={bugDescriptionRef} />
          <button onClick={handleButtonClick}>Add bug</button>
        </div>

        <br />

        <ul>
          {bugs.map((e) => {
            return (
              <li key={e.id}>
                <span>{`ID: ${e.id}   DESCRIPTION: ${e.description}   STATUS: ${
                  e.resolved === true ? "Resolved" : "Unresolved"
                }`}</span>
                <button onClick={() => dispatch(deleteBug(e.id))}>
                  DELETE
                </button>
                <button onClick={() => dispatch(toggleBug(e.id))}>
                  TOGGLE
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
