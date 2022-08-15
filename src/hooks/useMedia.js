import { useEffect, useState } from "react";

export default function useMedia(queries, values, defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  //   const getValue = () => {
  //     const index = mediaQueryLists.findIndex((mql) => mql.matches);
  //     return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  //   };

  useEffect(
    () => {
      // State update function
      const getValue = () => {
        const index = mediaQueryLists.findIndex((mql) => mql.matches);
        return typeof values[index] !== "undefined"
          ? values[index]
          : defaultValue;
      };
      setValue(getValue);
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach((mql) => mql.addListener(handler));

      return () =>
        mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    },

    [mediaQueryLists, values, defaultValue] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
}
