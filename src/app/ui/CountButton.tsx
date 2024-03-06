"use client";

import { useCount } from "../CountProvider";

interface Props {
  step: number;
}

export default function CountButton(props: Props) {
  const { count, setCount } = useCount();

  return (
    <button
      className="bg-white text-black p-2 shadow-inner"
      onClick={() => setCount(count + props.step)}
    >
      Change count with {props.step}
    </button>
  );
}
