import React from 'react'
import { useContext } from 'react'
import {ExpensesContext} from './ExpensesContext'

export const TotalAmount = () => {
  const { expenses } = useContext(ExpensesContext)

    // let {expensesArr} = expensesArr
    let totalPrice = expenses.reduce((total, item) => total + parseFloat(item.amount), 0);
 return (
    <div className="bg-yellow-100 h-64 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-semibold mb-4 text-yellow-800">Total Amount</h2>
      <div className="flex items-center justify-center">
        <p className="text-5xl font-bold text-yellow-900 mr-2">${totalPrice.toFixed(2)}</p>
        <span className="text-2xl text-yellow-700">USD</span>
      </div>
      <p className="mt-2 text-yellow-700">in expenses</p>
    </div>
  );
}
