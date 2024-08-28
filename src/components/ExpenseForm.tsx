import { categories } from '../data/categories';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ExpenseForm() {
	return (
		<form className='space-y-5'>
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
					id='category'>
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
				<DatePicker className='bg-slate-100 p-2 border-0' />
			</div>
			<input
				type='submit'
				value='Agregar Gasto'
				className='bg-blue-600 cursor-pointer text-white w-full p-2 rounded-lg uppercase font-bold '
			/>
		</form>
	);
}
