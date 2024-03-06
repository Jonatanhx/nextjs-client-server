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
const CountProvider = createContext<ContextValue>({} as ContextValue);

//Update logic goes here; i.e: Increment, decrement methods.

//påfart
export default function CountContext(props: PropsWithChildren) {
  const [count, setCount] = useState(0);
  return (
    /* Count = bilar */
    <CountProvider.Provider value={{ count, setCount }}>
      {props.children}
    </CountProvider.Provider>
  );
}

//Avfarten
export const useCount = () => useContext(CountProvider);
