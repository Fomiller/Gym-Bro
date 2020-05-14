import React, { useContext, createContext, useReducer } from 'react';

const GlobalContext = createContext({
  user: null,
});

const { Provider } = GlobalContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });
  return <Provider value={[state, dispatch]} {...props}/>
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };