import React from 'react'
import { useContext } from 'react'
import {ExpensesContext} from './ExpensesContext'

export const ListOfExpenses = () => {
  const { expenses } = useContext(ExpensesContext)

    return (
        <div>
          {expenses.length > 0 && (
            <div className=" rounded-lg p-4 ">
              <ul className="space-y-6">
                {expenses.map((exp) => (
                  <li
                    key={exp.id}
                    className="relative p-6 shadow-md bg-yellow-100 rounded-lg"
                  >
                    <div className="absolute w-6 h-6 bg-yellow-300 rounded-full top-0 left-0 transform -translate-x-3 -translate-y-3"></div>
                    <div className="ml-10 rounded-xl">
                      <p className="text-2xl font-semibold text-yellow-900">{exp.name}</p>
                      <div className="flex justify-between mt-2">
                        <p className="text-gray-700 text-lg">{exp.currency}</p>
                        <p className="text-3xl text-yellow-950 font-bold">{exp.amount}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
}
