"use client";

import { useState } from "react";

export default function CountButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="bg-white text-black p-2 shadow-inner"
      onClick={() => setCount(count + 1)}
    >
      click count: {count}
    </button>
  );
}
