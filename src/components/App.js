// import './App.css';
import Input  from "./Input";
import { ExpensesContext } from "./ExpensesContext";
import {useState}  from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <div className="App bg-yellow-50 min-h-screen max-h-max w-screen">
      <ExpensesContext.Provider value={{expenses, setExpenses}}>
      <header className="flex justify-center">
        <h1 className='text-7xl font-bold overflow-visible p-4 mb-2 text-yellow-500'>Treasury 🦋</h1>
      </header> 
      <body>
      <Input/>
      </body>
      </ExpensesContext.Provider>
    </div>
  );
}

export default App;
