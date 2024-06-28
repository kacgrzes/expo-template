import { useCallback, useState } from "react";

// Define the type for the return value of the useToggle hook
type UseToggleReturnType = [boolean, () => void, (value: boolean) => void];

// The useToggle hook
export const useToggle = (
  initialValue: boolean = false,
): UseToggleReturnType => {
  // Initialize state with the provided initial value or default to false
  const [state, setState] = useState<boolean>(initialValue);

  // Create a function to toggle the state
  const toggle = useCallback((): void => {
    setState((prevState) => !prevState);
  }, []);

  // Create a function to set the state to a specific value
  const setToggle = useCallback((value: boolean): void => {
    setState(value);
  }, []);

  // Return the state, toggle function, and setToggle function
  return [state, toggle, setToggle];
};
