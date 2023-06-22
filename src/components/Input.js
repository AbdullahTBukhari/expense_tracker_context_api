import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react'
import {ExpensesContext} from './ExpensesContext'
import { Button } from "./Button";
import { InputField } from "./InputField";
import { ListOfExpenses } from './ListOfExpenses';
import { TotalAmount } from './TotalAmount';


const Input = () => {
  // const [expenses, setExpenses] = useState([])
  const { setExpenses } = useContext(ExpensesContext)

const handleSubmit = (event) => {
  event.preventDefault()
  let expenseName = event.target.elements.expense.value;
  let expenseAmount = event.target.elements.amount.value;
  let currency = event.target.elements.c_ex.value;
  let expenseId = uuidv4();

  let expensesObj = {
    name: expenseName,
    amount: expenseAmount,
    currency: currency,
    id: expenseId
  }

  setExpenses(prev => [...prev, expensesObj])

  event.target.reset();
}


const handleC_ex = () => {}

  return (
    <div>
        <form 
        className='flex flex-wrap justify-around space-y-2 '
        onSubmit={handleSubmit}
        >
            <div className='w-full px-3 md:w-1/2 my-2'>
            <label htmlFor='expense'
            className='text-2xl font-semibold mr-2 mb-2'
            >Expense Name</label>
            <div className='inline-flex' >
            <InputField type='text' id='expense' />
            </div>
            </div>

            <div className='w-full md:w-1/2'>
            <label htmlFor='expense'
            className='text-2xl font-semibold mr-2 mb-2'
            >Amount Spent 😂</label>
            <div className='inline-flex'>
            <InputField type='number' id='amount' />

            <select name="c_ex" id="c_ex" onChange={handleC_ex}
            className='dropdown'>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="PKR">PKR</option>
            </select>
            </div>
            </div>
            <Button buttonName="Add Expense"/>
        </form>
        <div className='flex flex-row justify-around'>
        <div className=' w-96 '>
          <ListOfExpenses />
        </div>
        <TotalAmount />
        </div>
          
    </div>
  )
}

export default Input