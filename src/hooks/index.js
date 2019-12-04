import { useState, useCallback } from 'react';

export function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(function(event) {
    setValue(event.target.value);
  }, []);
  return { value, onChange };
}