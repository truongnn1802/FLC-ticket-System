interface State {
    data: {};
  }
  
  interface Action {
    type: string;
    payload: string;
  }
  
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_VALUE":
        return {
          ...state,
          data: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  