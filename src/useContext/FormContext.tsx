import React, { ChangeEvent, createContext, useReducer } from "react";
import reducer from "./reducer";


interface Props {
  children: any;
}
export const FormContext = createContext<any>({});

const FormProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
    data: {}
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data } = state;

  
  const setData = ({ target }: ChangeEvent<HTMLInputElement>): void =>
    dispatch({
      type: "SET_VALUE",
      payload: target.value
    });

  return (
    <FormContext.Provider
      value={"dsfsafds"}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;