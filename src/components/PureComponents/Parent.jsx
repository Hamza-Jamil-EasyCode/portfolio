import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
import useDebounce from "./useDebounce";

const Parent = () => {
  const [counter_1, setCounter1] = useState(0);
  const [counter_2, setCounter2] = useState(0);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //     console.log("Parent DID MOUNT")
  // }, []);

  const onChangeCountA = () => setCounter1(counter_1 + 1);
  const onChangeCountB = () => setCounter2(counter_2 + 1);

  // useDebounce( ()=>{  }, 1000, [search]);

  // const debounce = (func, delay) => {
  //     let timer;
  //     return function (...args) {
  //         const context = this;
  //         if (timer) clearTimeout(timer);
  //         timer = setTimeout(() => {
  //             timer = null;
  //             func.apply(context, args);
  //         }, 1000);
  //     }
  // }

  // const showOutput = () => console.log(search);

  // const changeHandler = (e) => {
  //     setSearch(e.target.value);
  //     console.log(e.target.value);
  // }

  // const optimizedVersion = useCallback(debounce(changeHandler), []);

  // useEffect(() => {
  //     let handler;
  //     if (!search)
  //         return;

  //     if (handler) clearTimeout(handler)

  //     handler = setTimeout(() => {
  //         alert("working!")
  //     }, 1000);

  // }, [search])

  // console.log("Parent");
  return (
    <div>
      {/* <ChildA value={counter_1} onChangeHandler={React.useCallback(onChangeCountA, [counter_1])} /> */}
      {/* <ChildB value={counter_2} onChangeHandler={React.useCallback(onChangeCountB, [counter_2])} /> */}
      {/* <ChildC
        value={counter_2}
        onChangeHandler={React.useCallback(onChangeCountB, [counter_2])}
      />*/}

      <h1>{counter_1}</h1>
      <button onClick={onChangeCountA}>Change Counter 1</button>
      <button onClick={onChangeCountB}>Change Counter 2</button>

      {/* <input type="text" className='form-control' onChange={optimizedVersion} />  */}

      <ChildC value={counter_2} />
    </div>
  );
};

export default Parent;
