import { useReducer, createContext, Dispatch, ReactNode } from 'react';
import {
	BadgetAction,
	badgetReducer,
	BadgetState,
	initialState,
} from '../reducers/badget.reducer';

type BudgetContextProps = {
	state: BadgetState;
	dispatch: Dispatch<BadgetAction>;
};

type BudgetProviderProps = {
	children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(
	{} as BudgetContextProps
);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
	const [state, dispatch] = useReducer(badgetReducer, initialState);
	return (
		<BudgetContext.Provider value={{ state, dispatch }}>
			{children}
		</BudgetContext.Provider>
	);
};
