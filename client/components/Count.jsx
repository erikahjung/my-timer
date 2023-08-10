import React, { memo, useRef, useEffect } from "react";

function Count() {
  const count = useRef(0);

  useEffect(() => {
    count.current++;
    console.log(count.current);
  }, [count.current]);

  return (
    <p className='count'>Count: {count.current}</p>
  )
}

export default Count;