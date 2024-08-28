export type BadgetAction = { type: 'ADD_BADGET'; payload: { budget: number} };

export type BadgetState = { 
  budget: number;
};

export const initialState: BadgetState = {
  budget: 0,
}

export const badgetReducer = (
  state: BadgetState = initialState,
  action: BadgetAction
) => {

  if(action.type === 'ADD_BADGET') {
    return {
      ...state,
      budget: action.payload.budget
    }
  }
  return state;
}
