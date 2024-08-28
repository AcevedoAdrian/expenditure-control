export type BadgetAction = { type: 'ADD_BADGET'; payload: { budget: number} }|
{ type: 'SHOW_MODAL' };

export type BadgetState = { 
  budget: number;
  showModal?: boolean;
};

export const initialState: BadgetState = {
  budget: 0,
  showModal: false
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
  if(action.type === 'SHOW_MODAL') {
    return {
      ...state,
      showModal: !state.showModal
    }
  } 
  return state;
}
