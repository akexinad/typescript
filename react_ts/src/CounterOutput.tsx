import React from "react";

interface CounterOutputProps {
  counter: number;
}

export const CounterOutput = ({ counter }: CounterOutputProps) => {
  return <p>{ counter }</p>;
};
