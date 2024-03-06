"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextValue {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

//motorväg
const CountContext = createContext<ContextValue>({} as ContextValue);

//Update logic goes here; i.e: Increment, decrement methods.

//påfart
export default function CountProvider(props: PropsWithChildren) {
  const [count, setCount] = useState(0);
  return (
    /* Count = bilar */
    <CountContext.Provider value={{ count, setCount }}>
      {props.children}
    </CountContext.Provider>
  );
}

//Avfarten
export const useCount = () => useContext(CountContext);
