import { useState, useMemo, ChangeEvent, FormEvent } from 'react';
import { useBudget } from '../hooks/useBudget';
export default function BudgetForm() {
	const [budget, setBudget] = useState(0);
	const { dispatch } = useBudget();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setBudget(parseInt(event.target.value));
	};

	const isBadgetValid = useMemo(() => {
		return isNaN(budget) || budget <= 0;
	}, [budget]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch({ type: 'ADD_BADGET', payload: { budget } });
	};

	return (
		<form
			className='space-y-5'
			onSubmit={handleSubmit}>
			<div className='flex flex-col space-y-5'>
				<label
					htmlFor='budgetID'
					className='text-4xl text-blue-600 font-bold text-center'>
					Ingresa tu presupuesto
				</label>
				<input
					id='budgetID'
					type='number'
					className='w-full bg-white border bordger-gray-300 p-2'
					placeholder='Definir presupuesto'
					name='budget'
					value={budget}
					onChange={handleChange}
				/>
			</div>
			<input
				type='submit'
				value='Definir presupuesto'
				className='bg-blue-600 w-full p-2 text-white uppercase font-black hover:bg-blue-700 cursor-pointer disabled:opacity-50'
				disabled={isBadgetValid}
			/>
		</form>
	);
}
