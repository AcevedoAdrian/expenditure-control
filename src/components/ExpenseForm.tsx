import { useState, ChangeEvent, FormEvent } from 'react';
import { categories } from '../data/categories';
import DatePicker from 'react-date-picker';
import type { DraftExpense, Value } from '../types';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function ExpenseForm() {
	const [expense, setExpense] = useState<DraftExpense>({
		amount: 0,
		expenseName: '',
		category: '',
		date: new Date(),
	});
	const [error, setError] = useState('');

	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		const isAmount = ['amount'].includes(name);
		setExpense({
			...expense,
			[name]: isAmount ? Number(value) : value,
		});
	};

	const handleChangeDate = (value: Value) => {
		setExpense({
			...expense,
			date: value,
		});
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// validate inputs
		if (Object.values(expense).includes('')) {
			setError('Todos los campos son obligatorios');
			return;
		}
		console.log('Todo correcto');
	};
	return (
		<form
			className='space-y-5'
			onSubmit={handleSubmit}>
			<legend className='uppercase text-center font-black text-2xl text-gray-600 border-b-2 border-blue-600 py-2'>
				Nuevo Gasto
			</legend>
			<div className='flex flex-col'>
				<label
					htmlFor='expenseName'
					className='text-xl text-gray-800'>
					Nombre del Gasto:
				</label>
				<input
					type='text'
					id='expenseName'
					placeholder='Agrege el nombre del gasto: Ej. Comida'
					className='bg-slate-100 p-2'
					name='expenseName'
					value={expense.expenseName}
					onChange={handleChange}
				/>
			</div>
			<div className='flex flex-col'>
				<label
					htmlFor='amount'
					className='text-xl text-gray-800'>
					Cantidad:
				</label>
				<input
					type='number'
					id='amount'
					placeholder='Agrege la cantidad del gasto: Ej. 100'
					className='bg-slate-100 p-2'
					name='amount'
					value={expense.amount}
					onChange={handleChange}
				/>
			</div>
			<div className='flex flex-col'>
				<label
					htmlFor='category'
					className='text-xl text-gray-800'>
					Categoria:
				</label>
				<select
					name='category'
					className='bg-slate-100 p-2'
					id='category'
					value={expense.category}
					onChange={handleChange}>
					<option value=''>Seleccione una categoria</option>
					{
						/* categories */
						categories.map(category => (
							<option
								key={category.id}
								value={category.id}>
								{category.name}
							</option>
						))
					}
				</select>
			</div>
			<div className='flex flex-col'>
				<label
					htmlFor='amount'
					className='text-xl text-gray-800'>
					Fecha Gasto:
				</label>
				<DatePicker
					className='bg-slate-100 p-2 border-0'
					value={expense.date}
					onChange={handleChangeDate}
				/>
			</div>
			<input
				type='submit'
				value='Agregar Gasto'
				className='bg-blue-600 cursor-pointer text-white w-full p-2 rounded-lg uppercase font-bold '
			/>
		</form>
	);
}
