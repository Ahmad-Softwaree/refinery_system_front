import { useMemo } from "react";

export default function Memorize({ Component: component, dependency }) {
  return useMemo(() => {
    return component;
  }, [dependency]);
}
