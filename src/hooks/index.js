import { useState, useCallback } from 'react';

export function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(function(event) {
    setValue(event.target.value);
  }, []);
  return { value, onChange };
}

// export function useQuery(query){
//     const[loading,setLoading]=useState(true)
//     let resp;
//     try {
//       const response = await axios.get(query);
//       setLoading(false)
//       resp = {
//         data: response.data,
//         error: null,
//         loading
//       };
//     } catch (err) {
//       resp = {
//         loading:false,
//         data: null,
//         error: err.message
//       };
//     }
//     return resp;
// }