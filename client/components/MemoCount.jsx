import React, { memo, useRef, useEffect } from "react";

function MemoCount() {
  const count = useRef(0);

  useEffect(() => {
    count.current++;
    console.log(count.current);
  }, [count.current]);

  return (
    <p className='count'>MemoCount: {count.current}</p>
  )
}

export default memo(MemoCount);