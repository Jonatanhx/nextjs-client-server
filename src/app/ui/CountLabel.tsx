"use client";

import { useCount } from "../CountProvider";

export default function CountLabel() {
  const { count } = useCount();
  return <span>{count}</span>;
}
